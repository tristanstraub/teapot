(defun mandelbrot ()
	(let* ((canvas ~("$('<canvas class=\"output\" width=\"100%\" height=\"100%\"></canvas>').prependTo('#output-container')"))
				 (ctx ~(^canvas ".get(0).getContext('2d')"))
				 (width ~(^canvas ".width()"))
				 (height ~(^canvas ".height()")))
		(setq ~(^ctx ".fillStyle") "rgb(200,0,0)")
		~(^ctx ".fillRect(0,0," ^width "," ^height ")")))

(mandelbrot)
