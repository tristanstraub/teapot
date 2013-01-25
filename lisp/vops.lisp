(defun env ()
  1)

(defun nextenv (env)
  (if (null env)
      1
      (+ env 1)))

(defun prevenv (env)
  (if (eql env 1)
      nil
      (- env 1)))

(defun denv (env)
  (concat "env" env))

(defmacro defvop (name args &rest body)
  `(defun ,(symbol-t (concat "vop:" (string-t name)))
       ,args
     ,@body))

(defun vopsquote-unquote (forms)
  (mapcar (lambda (x)
            (cond ((and (listp x)
                        (eql (car x) 'vopsquote-uq))
                   (compile (cadr x) nil))
                  ((listp x)
                   (vopsquote-unquote x))
                  (t x)))
          forms))

(defmacro vopsquote (forms)
  `(vops (concat ,@(vopsquote-unquote forms))))

(defvop init ()
  (concat
   "if (typeof window !== 'undefined')
		{
				modules = {
						fs : {
								readFile : function(name, callback) { $.get(name, function(data) { callback(null, data); }); }
						},
						sys : {
								print : function() { return console.log.apply(console, arguments); },
								debug : function() { return console.log.apply(console, arguments); }
						}
				};
				
				require = function(name)
				{
					return modules[name];
				};
				
				process = { argv : [] };
		}"
   "var sys=require('sys');"
   "var fs=require('fs');"
   "if (typeof functions === 'undefined') {"
   "    functions = {};"
   "}"
   "if (typeof macros === 'undefined') {"
   "    macros = {};"
   "}"
   "function Symbol(value)
				 {
						 this.value = value;
				 };"))

(defvop t ()
  "true")

(defvop nil ()
  "null")

(defun undefined->null (x)
  ~("((" ^x "!=null && typeof " ^x " !== 'undefined')?" ^x ":null)"))

(defvop if (if then else env)
  (concat "((" 
          (compile `(undefined->null ,if) env) " != null)?(" 
          (compile then env) "):("
          (compile else env) "))"))

(defmacro typeof (arg)
  `~("(typeof " ^,arg ")"))

(defmacro top-var (var env)
  (if env
      `(compile `(if (=== (typeof (vops (vop:lookup ,var ,env))) "undefined")
                     (top-var ,var ,(prevenv env))
                     ~("undefined"))
                ,env)
      nil))

(defvop assign (var val env)
  (concat (compile var env)
          "=" 
          (compile val env)))

(defun quoted-symbol-p (k)
  (and (listp k)
       (and (eql (car k) 'quote)
            (symbol-t-p (cadr k)))))

(defun string->hexencode (str)
  (if (> (array.length str) 0)
      (let* ((hex "0123456789abcdef")
             (val (char-code (aref str 0))))
        (concat (aref hex (math.floor (/ val 16)))
                (aref hex (% val 16))
                (string->hexencode (subseq str 1))))
      ""))

(defun make-fn-name (form)
  (concat "fn_" (string->hexencode (string-t (cadr form)))))

(defun make-var-name (form)
  (concat "var_" (string->hexencode (string-t form))))

(defvop lookup (form env)
  (make-var-name form))

(defvop load-from (where name env)
  (let* ((rename-symbol (lambda (name)
                          (if (quoted-symbol-p name)
                              (concat "'" (string-t (cadr name)) "'")
                              (concat (compile `(string-t ,name) nil))))))
    (cond ((eql where 'functions-dict)
           (concat "functions[" (funcall rename-symbol name) "]"))
          ((and (eql where 'functions)
                (quoted-symbol-p name))
           (make-fn-name name))
          ((eql where 'env)
           (vop:lookup name env))
          (where 
           (concat (string-t where) "[" (funcall rename-symbol name) "]"))
          (t
           (concat (string-t (cadr name)))))))


(defvop defun (form env)
  (:compile-progn 
   (make-forms-reader `((setq (location 'functions-dict ',(cadr form)) (lambda ,(caddr form) ,@(cdddr form)))
                        (setq (local ',(symbol-t (make-fn-name form)))
                              (location 'functions-dict ',(cadr form)))))
   env
   (lambda (x) x)))

(defvop symbol (form env)
  (concat "(new Symbol('" (string-escape (string-t form)) "'))"))

(defvop number (form)
  form)

(defvop string (form)
  (concat "'" (string-escape form) "'"))

(defvop quote (form env)
  (cond ((not form)                           (vop:nil))
        ((atom form) (cond ((number-t-p form) (vop:number form))
                           ((string-t-p form) (vop:string form))
                           (t                 (vop:symbol form env))))
        (t                        (concat "["
                                          (vop:quote (car form) env)
                                          ","
                                          (vop:quote (cdr form) env)
                                          "]"))))


(defun compiledforms->commalist (xs env)
  (if (null xs)
      (vop:nil)
      (concat "[" 
              (compile (car xs) env)
              "," 
              (compiledforms->commalist (cdr xs) env)
              "]")))

(defvop list (xs)
  (if (null xs)
      (vop:nil)
      (concat "[" 
              (car xs)
              "," 
              (vop:list (cdr xs))
              "]")))

(defvop block (xs)
  (if (null xs)
      ""
      (concat (car xs)
              ";\n"
              (vop:block (cdr xs)))))

(defvop call (fn args env)
  (concat (compile fn env) 
          "(" 
          (compiledforms->commalist args env)
          ")"))

(defvop apply (fn args env)
  (concat (compile fn env) 
          "(" 
          (compile args env)
          ")"))

(defun compile-group-parameters (names env)
  (if names
      (cond ((eql (car names) '&rest)
             (concat "\t" 
                     "var " (compile (cadr names) env) "=args;\n"))
            (t
             (concat "\t" 
                     "var " (compile (car names) env) "=args[0];\n"
                     "args=args[1];\n"
                     (compile-group-parameters (cdr names) env))))))

(defvop return (form env)
  (concat "return " (compile form env) ";"))

(defvop closure (form env)
  (let* ((lenv (nextenv env)))
    (concat "(function(args) {\n"
            (compile-group-parameters (cadr form) lenv)
            (if (cddr form)
                (:compile-progn (make-forms-reader (cddr form)) lenv (lambda (x) (concat "\treturn " x ";")))
                "\treturn null;\n")
            "})\n")))

(defmacro defboolbinop (name)
  `(defmacro ,name (a b)
     `~("((" ^,',a ,(string-t name) ^,',b ")?true:null)")))

(defmacro defbinop (name)
  `(defmacro ,name (a b)
     `~("(" ^,',a ,(string-t name) ^,',b ")")))

(defboolbinop >)
(defboolbinop <)
(defboolbinop ==)
(defboolbinop ===)
(defboolbinop >=)
(defboolbinop <=)

(defbinop +)
(defbinop -)
(defbinop *)
(defbinop /)
(defbinop %)

(defun cons (a b)
  ~("[" ^a "," ^b "]"))

(defmacro cons (a b)
  `~("[" ^,a "," ^,b "]"))

(defun car (x)
  ~(^x "[0]"))

(defmacro car (x)
  `~(^,x "[0]"))

(defun cdr (x)
  ~(^x "[1]"))

(defmacro cdr (x)
  `~(^,x "[1]"))

(defun null (x)
  (or (eql x nil)
      (eql (typeof x) "undefined")))

(defun fatal ()
  "throw 'fatal error';")

(defun meval (code)
  ~("try {")
  ~("return eval(" ^code ")")
  ~("} catch(e) { sys.debug(" ^code "); throw e; }")
  nil)

(defun printerror (arg)
  ~("sys.debug(" ^arg ")")
  arg)

(defun symbol-t-p (arg)
  ~("(" ^arg " instanceof Symbol ? true:null)"))

(defun string-t-p (arg)
  ~("(typeof " ^arg " === 'string' ? true:null)"))

(defun number-t-p (arg)
  ~("(typeof " ^arg " === 'number' ? true:null)"))

(defun symbol-t (arg)
  (if (symbol-t-p arg)
      ~("new Symbol(" ^arg ".value)")
      ~("new Symbol(''+" ^arg ")")))

(defun boolean-t-p (arg)
  ~("(typeof " ^arg " === 'boolean' ? true:null)"))

(defun string-t (arg)
  (cond ((symbol-t-p arg)
         ~(^arg ".value"))
        ((boolean-t-p arg)
         ~("(" ^arg "?'t':'nil')"))
        (t
         ~("''+" ^arg))))


(defun number-t (arg)
  (if (symbol-t-p arg)
      ~("parseFloat(" ^arg ".value)")
      ~("parseFloat(''+" ^arg ")")))

(defun eql (x y)
  (cond ((and (symbol-t-p x)
              (symbol-t-p y))
         ~("(" ^x ".value == " ^y ".value ? true:null)"))
        (t
         ~("(" ^x " == " ^y "?true:null)"))))

(defun atom (arg)
  (cond ((null arg) t)
        ((symbol-t-p arg) t)
        (t 
         (in (typeof arg) '("boolean" "number" "string")))))

(defun concat ()
  ~("var s = '';
	while(args != null)
	{
	if (args[0] != null)
	s += args[0];
	args = args[1];
	}")
  ~("s"))

(defun read-line (callback)
  ~("process.stdin.resume();
     process.stdin.once('data',
     function(data) {
       " ^callback "([data+'', null]);
     });")
  nil)

(defun require ()
  ~("var file = args[0];
	   var callback = args[1][0];

		 fs.readFile(file, function(err, data) {
			 callback([data+'', null]);
		 });")
  nil)

(defun subseq ()
  ~("if (args[1][1] != null)
			 return args[0].substring(args[1][0], args[1][1][0]);
		 else
			 return args[0].substring(args[1][0]);")
  nil)

(defun print ()
  ~("var values = [];
		 var printvalues = [];
		 var v = null;
		 while(args != null)
		 {
			 v = args[0];
			 if (v instanceof Symbol)
         printvalues.push(v.value);
       else
         printvalues.push(v);
       args = args[1];
     }
     sys.print(printvalues.join(''));
     return v;")
  nil)

(defun array.length (array)
  ~(^array ".length"))

(defun array->list (array)
  (if (> (array.length array) 0)
      (cons ~(^array "[0]")
            (if (> (array.length array) 1)
                (array->list ~(^array ".slice(1)"))))))

(defun aref (array i)
  ~(^array "[" ^i "]"))

(defun char-code (s)
  ~(^s ".charCodeAt(0)"))

(defun math.floor (num)
  ~("Math.floor(" ^num ")"))

(defmacro make-hash ()
  '~("{}"))

(defmacro get-hash (hash key)
  `~(^,hash "[" ^(string-t ,key) "]"))

(defmacro set-hash (hash key value)
  `(setq ~(^,hash "[" ^(string-t ,key) "]") ,value))

(defmacro length (str)
  `~(^,str ".length"))

(defmacro string.length (str)
  `~(^,str ".length"))

(defmacro catch-errors (fn &rest body)
  `(progn ~("try {" ^,@body "} catch(e) { " ^(funcall ,fn ~("e")) "}")
          nil))

(defmacro labels (functions &rest body)
  `(apply (lambda () 
            ~(,@(mapcar (lambda (fn) `^~("var " ^(setq (function ',(car fn))
                                                       (lambda ,(cadr fn) ,@(cddr fn)))
                                                ";"))
                        functions))
            ,@body)
          nil))


