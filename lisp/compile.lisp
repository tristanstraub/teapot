(defmacro defvar (name value)
	`(if (eql (typeof ,name) "undefined")
		(setq ,name ,value)))

(defvar *charhooks* (make-hash))

(defmacro defcharhook (c mac)
	`(hook-char ,c (lambda (form) (list (quote ,mac) form))))

(defcharhook "'" quote)
(defcharhook "`" qq)
(defcharhook "~" vopsquote)
(defcharhook "^" vopsquote-uq)
(defcharhook "," uq)
(defcharhook "@" sl)

(defvar *features* (make-hash))

(defmacro when-feature (form)
	`(if (get-hash *features* ',(car form))
			 (progn ,@(cdr form))))

(defun provides-feature (feature)
	(set-hash *features* feature t))

(defcharhook "!" when-feature)

(defun compile (form env)
  (cond ((null form)                          (vop:nil))
				((atom form) (cond ((number-t-p form) (vop:number form))
													 ((string-t-p form) (vop:string form))
													 ((eql form 't)     (vop:t))
													 ((eql form 'nil)   (vop:nil))
													 ((symbol-t form)   (vop:load-from 'env form env))
													 (t                 (fatal "unknown atom"))))
        ((macro (car form))                   (compile 
																							 (eval
																								`(funcall (macro ',(car form))
																												,@(mapcar (lambda (x) `',x) 
																																	(cdr form)))
																								(env))
																							 env))
        ((eql 'macroexpand (car form))        
																							 (eval
																								`(funcall (macro ',(car (cadr form)))
																													,@(mapcar (lambda (x) `',x) 
																																		(cdr (cadr form))))
																								(env)))

				((eql 'defun (car form))				      (compile-fun form env))
				((eql 'defmacro (car form))   				(compile-macro form env))
				((eql 'vops (car form))               (meval (:compile-progn (make-forms-reader (cdr form)) (env) (lambda (x) x))))
        ((eql 'if (car form))				          (vop:if (cadr form) 
																											(car (cddr form)) 
																											(if (cdr (cddr form)) 
																													(car (cdr (cddr form)))) 
																											env))
        ((eql 'quote (car form))              (vop:quote (cadr form) env))
 				((eql 'setq (car form))       				(vop:assign (cadr form) (caddr form) env))
        ((eql 'lambda (car form))             (vop:closure form env))
				((eql 'local (car form))              (vop:load-from nil (cadr form) env))
				((eql 'location (car form))           (vop:load-from (eval (cadr form) nil) (caddr form) env))
 				((eql 'macro (car form))      				(vop:load-from 'macros (cadr form) env))
				((eql 'function (car form))  				  (vop:load-from 'functions (cadr form) env))
        ((eql 'funcall (car form))            (vop:call (cadr form) (cddr form) env))
        ((eql 'apply (car form))				      (vop:apply (cadr form) (caddr form) env))
        (t                                    (vop:call `(function ',(car form)) (cdr form) env))))

(defun eval (form env)
	(meval (compile form env)))

(defun compile-fun (form env)
	(vop:defun form env))

(defun compile-macro (form env)
	(compile `(setq (macro ',(cadr form)) (lambda ,(caddr form) ,@(cdddr form))) env))

(defun :compile-progn* (reader env lastframe &rest do-eval)
	(let* ((form (funcall reader)))
		(if (null form)
				nil
				(let* ((head (compile form env))
							 (result (if (and do-eval (car do-eval))
													 (meval head))))
					(let* ((tail (:compile-progn* reader env lastframe (and do-eval (car do-eval)))))
						(if (null tail)
								(cons (funcall lastframe head result) nil)
								(cons head tail)))))))

(defun :compile-progn (reader env lastframe &rest do-eval)
	(vop:block (:compile-progn* reader env lastframe (and do-eval (car do-eval)))))

(defun :compile-top (reader env)
	(concat (vop:init)
					(:compile-progn reader env (lambda (x) x) t)))

(defun :parse-and-eval (data)
	(let* ((ret nil))
		(:compile-progn (make-reader data) (env) (lambda (x result) 
																							 (setq ret result) 
																							 x) t)
		ret))

(defun :parse-and-compile (data)
	(:compile-top (make-reader data) (env)))

(defun repl ()
	(print "? ")
	(read-line (lambda (data)							 
							 (print (repr (meval (:compile-progn (make-reader data) (env) (lambda (x) x)))))
							 (repl))))

(defvar *running* nil)

(defun load (file)
	(require file
					 (lambda (data) (:parse-and-eval data))))

(defun main (args)
	(setq *running* t)
	(if args
			(cond ((eql "--eval" (car args))
						 (require (cadr args) (lambda (data)
																		(:parse-and-eval data))))
						((eql "--compile" (car args))
						 (require (cadr args) (lambda (data)
																		(print (:parse-and-compile data))
																		(provides-feature 'compiling)
																		(setq *running* t))))
						(t 
						 (main (cdr args))))
			(repl)))

(defun start ()
	(if (null *running*)
			(main (array->list ~("process.argv")))))

(if (eql (typeof ~("window")) "undefined")
		(provides-feature 'node)
		(provides-feature 'browser))


;;(printerror (repr (get-hash *features* 'node)))
;;(printerror (repr (get-hash *features* 'browser)))

;;!(browser (progn (printerror "browser!")))

;;!(node (progn (printerror "node!")))
!(node 
	(start))

