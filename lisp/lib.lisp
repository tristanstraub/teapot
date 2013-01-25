(defmacro and (a b)
  (list 'if a
        (list 'if b
              't)))

(defmacro progn (&rest body)
  (list (quote funcall) (cons (quote lambda) (cons (quote ()) body))))

(defun caar (x)
  (car (car x)))

(defun cadr (x)
  (car (cdr x)))

(defun cddr (x)
  (cdr (cdr x)))

(defun caddr (x)
  (car (cdr (cdr x))))

(defun cadddr (x)
  (car (cdr (cddr x))))

(defun cdddr (x)
  (cdr (cdr (cdr x))))

(defmacro let-1 (pars body)
  (cons 
   (quote funcall)
   (cons (cons 
          (quote lambda)
          (cons (cons (car pars) nil) body))
         (cons (cadr pars) nil))))

(defmacro let* (pars &rest body)
  (if pars
      (list (quote let-1)
            (car pars)
            (if (cdr pars)
                (list (cons (quote let*) (cons (cdr pars)
                                               body)))
                body))
      body))

(defun cond% (rest)
  (let* 
      ((next (car rest))
       (andthen
        (if (cdr rest)
            (cond% (cdr rest))))
       (expansion
        (if next
            (cons (quote if) 
                  (cons (car next) 
                        (cons (cons (quote progn) 
                                    (cdr next))
                              (cons andthen nil)))))))
    expansion))

(defmacro cond (&rest rest)
  (cond% rest))

(defmacro qq (x)
  (cond ((not x)
         nil)
        ((atom x)
         (list 'quote x))
        ((eql 'uq (car x))
         (cadr x))
        ((and (and (listp (car x))
                   (eql 'uq (car (car x))))
              (and (listp (cadr (car x)))
                   (eql 'sl (car (cadr (car x))))))
         (list 'append
               (cadr (cadr (car x)))
               (list 'qq (cdr x))))
        (t
         (list 'cons
               (list 'qq (car x))
               (list 'qq (cdr x))))))

(defun requires* (these callback files)
  (if these
      (require (car these)
               (lambda (data)
                 (requires* (cdr these) 
                            callback 
                            (cons (car these) (cons data files)))))
      (if callback
          (funcall callback files))))

(defun requires (these callback)
  (requires* these callback nil))

(defun println (x)
  (print x)
  (print "\n"))

(defun list (&rest rest)
  rest)

(defun not (x)
  (if x
      nil
      t))

(defun listp (x)
  (not (atom x)))

(defmacro or (a b)
  `(if ,a
       t
       (if ,b
           t)))

(defun in (el hs)
  (if hs
      (if (eql el (car hs))
          t
          (in el (cdr hs)))))

(defun assoc (el list)
  (if list
      (if (eql el (car list))
          (cadr list)
          (assoc el (cddr list)))))

(defun mapcar (fun list)
  (if list
      (cons (funcall fun (car list))
            (mapcar fun (cdr list)))))

(defun mapicar (fun list &rest index)
  (let* ((i 
          (if index
              (car index)
              0)))
    (if list
        (cons (funcall fun i (car list))
              (mapicar fun (cdr list) (+ i 1))))))

(defun last (values)
  (let* ((ret 
          (if (cdr values)
              (last (cdr values))
              (car values))))
    ret))

(defun heads (values)
  (if (cdr values)
      (cons (car values) (heads (cdr values)))))

(defun r (c)
  (cond ((null c)
         c)
        ((atom c)
         c)
        (t
         (cons (r (cdr c)) (r (car c))))))

(defun append (heads tail)
  (if heads
      (cons (car heads)
            (append (cdr heads) tail))
      tail))

(defun reverse (values)
  (if values
      (append (reverse (cdr values)) (list (car values)))))

(defun append-each (heads tails)
  (if tails
      (append-each (append heads (car tails)) (list (cdr tails)))
      heads))

(defun elt (seq i)
  (car (subseq seq i (+ i 1))))

(defun pretty-print-list (form)
  (if form
      (concat
       (string-t (pretty-print-to-string (car form)))
       (if (cdr form)
           (concat " " (string-t (pretty-print-list (cdr form))))))
      "nil"))



(defun pretty-print-to-string (form)
  (cond ((null form) "nil")
        ((string-t-p form)
         (concat "\"" form "\""))
        ((atom form)
         (string-t form))
        (t
         (concat "(" (pretty-print-list form) ")"))))

(defun repr (form)
  (pretty-print-to-string form))

(defun print-list (values)
  (if values
      (progn
        (print (car values))
        (print-list (cdr values)))))

(defun write-line (x)
  (print x))

(defmacro test-equal (test result)
  `(let* ((test-result ,test))
     (if (equal test-result ,result)
         (println (concat "passed: " (repr ',test) "->" (repr test-result) "==" (repr ,result)))
         (println (concat "FAILED: " (repr ',test) "->" (repr test-result) "!=" (repr ,result))))))

(defmacro test-not-equal (test result)
  `(let* ((test-result ,test))
     (if (not (equal test-result ,result))
         (println (concat "passed: " (repr ',test) "->" (repr test-result) "!=" (repr ,result)))
         (println (concat "FAILED: " (repr ',test) "->" (repr test-result) "==" (repr ,result))))))

(defmacro test-assert (test)
  `(test-equal ,test t))

(defun equal (a b)
  (if (and (not a) (not b))
      t
      (if (and a (not b))
          nil
          (if (and b (not a))
              nil
              (if (and (atom a) (not (atom b)))
                  nil
                  (if (and (not (atom a)) (atom b))
                      nil
                      (if (atom a)
                          (eql a b)
                          (and (equal (car a) (car b))
                               (equal (cdr a) (cdr b))))))))))


(defun remove-if-not (f list)
  (if list
      (let* ((rest (remove-if-not f (cdr list))))
        (if (funcall f (car list))
            (cons (car list) rest)
            rest))))

(defun remove-if (f list)
  (remove-if-not (lambda (x) (not (funcall f x))) list))

(defun weave (x y)
  (if x
      (cons (car x) 
            (cons (car y)
                  (weave (cdr x) (cdr y))))))

(defun concat* (x)
  (if x
      (concat (car x)
              (if (cdr x)
                  (concat* (cdr x))
                  ""))))

(defun join (hs sep)
  (if hs
      (concat
       (car hs) 
       (if (cdr hs)
           (concat sep (join (cdr hs) sep))
           ""))
      ""))

(defun reduce (fun accumulator hs)
  (if hs
      (reduce fun
              (funcall fun accumulator (car hs))
              (cdr hs))
      accumulator))

(defun last? (xs)
  (and xs
       (null (cdr xs))))

(defun except-last (xs)
  (if (last? xs)
      nil
      (cons (car xs) (except-last (cdr xs)))))

(defun string-escape (form)
  (if form
      (let* ((form (string-t form)))
        (if (eql form "")
            ""
            (let* ((c (subseq form 0 1))
                   (rest (subseq form 1)))
              (concat
               (cond ((eql c "'")
                      "\\'")
                     ((eql c "\"")
                      "\\\"")
                     ((eql c "\\")
                      "\\\\")
                     ((eql c "\n")
                      "\\n")
                     ((eql c "\r")
                      "\\r")
                     ((eql c "\t")
                      "\\t")
                     (t c))
               (string-escape rest)))))
      ""))

(defmacro let (vars &rest body)
  `(let* ,vars ,@body))

(defmacro case (value &rest rest)
  (if rest
      (let ((first (car rest)))
        `(cond ((equal ,value ',(car first)) 
                ,@(cdr first))
               (t 
                (case ,value ,@(cdr rest)))))))

