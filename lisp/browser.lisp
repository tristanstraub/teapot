!(browser
  (defun from-char-code (c)
	~("String.fromCharCode(" ^c ")"))

  (defun make-input ()
	~("$('<div class=\"input\"><span class=\"caret\"></span></div>').prependTo('#content')"))

  (defun make-output (text)
	~("$('<div class=\"output\"/>').text(" ^text ").prependTo('#output-container')"))

  (defun make-error (e)
	~("$('<div class=\"error\"/>').text(" ^(string-t e) ").prependTo('#output-container')"))

  (defun scroll-to-bottom ()
	~("$('#content').attr('scrollTop',$('#content').attr('scrollHeight'))"))

  (defun space->nbsp (c)
	(if (eql c " ")
        "&nbsp;"
        c))

  (defun remove-caret ()
	~("$('.caret').remove()"))

  (defun add-input-char (input c)
	~("$('<span class=\"char\">' + " ^(space->nbsp c) " + '</span>').insertBefore(" ^input ".find('.caret'))"))

  (defun add-input-string (input str)
	(if (> (string.length str) 0)
        (progn
          (add-input-char input (subseq str 0 1))
          (add-input-string input (subseq str 1)))))

  (defvar *load* (function 'load))

  (defun load (name)
	(let* ((url (concat "lisp/" name ".lisp")))
      ~("$('#output-container').prepend('<a class=\"file\" href=\"' + " ^(string-escape url) " + '\">' + " ^(string-escape name) "+ '</a>')")
      (funcall *load*	url)))

  (defun make-load-url (name)
	~("$('<a class=\"file\" href=\"#\">' + " ^(string-escape name) "+ '</a>').click(" ^(lambda () (load name)) ")"))

  (defun make-handler ()
	(let* ((input nil)
           (text "")
           (prev nil)
           (keypress (lambda (&rest e)
                       ~(^e ".preventDefault()")
                       (let* ((which (get-hash e 'which)))
                         (cond ((eql which 13)
                                (setq prev (cons text prev))
                                (remove-caret)
                                (catch-errors (lambda (e) (make-error e))
                                              (make-output (repr (:parse-and-eval text))))
                                (setq text "")
                                ~(^input ".remove()")
                                (setq input (make-input))
                                (scroll-to-bottom))
                               ((eql which 8)
                                nil)
                               (t (setq text (concat text (from-char-code which)))
                                  (add-input-char input (from-char-code which)))))))
           (keydown (lambda (&rest e)
                      ~(^e ".preventDefault()")
                      (let* ((which (get-hash e 'which)))
                        (cond ((eql which 38) ;; up arrow
                               (if prev
                                   (progn ~(^input ".remove()")
                                          (setq input (make-input))
                                          (setq text (car prev))
                                          (add-input-string input (car prev)))))
                              ((eql which 8)
                               (cond ((> (string.length text) 0)
                                      (setq text (subseq text 0 (- (string.length text) 1)))

                                      ~(^input ".find('.caret').prev().remove()")))))))))
      (setq input (make-input))
      (lambda (type)
        (cond ((eql type 'keypress) keypress)
              ((eql type 'keydown) keydown)))))

  (defun repl ()
	~("$('#files').append(" ^(make-load-url "drawsquare") ")")

	(let* ((handler (make-handler)))
      ~("$(window).keypress(" ^(funcall handler 'keypress) ").keydown(" ^(funcall handler 'keydown) ")")))

  (defun print (&rest forms)
	(if forms
        (progn
          (make-output (string-t (car forms)))
          (apply (function 'print) (cdr forms)))))

  ~("$(" (lambda () (repl)) ")"))


