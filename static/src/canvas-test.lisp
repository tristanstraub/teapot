(defun canvas ()
	"$('#canvas').get(0)")

(defun make-canvas ()
	(concat "$('body').append('<canvas id=\"canvas\" width=\"320\" height=\"240\"></canvas>');"))

(defun set-context ()
	(concat "var context = " (canvas) ".getContext('2d');"))

(defun move-to (x0 y0)
	(concat "context.moveTo(" x0 "," y0 ");"))

(defun line-to (x0 y0)
	(concat "context.lineTo(" x0 "," y0 ");"))

(defun draw-line (x0 y0 x1 y1)
	(concat (move-to x0 y0)
					(line-to x1 y1)
					"context.stroke();"))

(defun fill-rect (x0 y0 x1 y1)
	(concat "context.fillRect(" x0 "," y0 "," x1 "," y1 ");"))

(defmacro jsc (&rest rest)
	`(jseval (concat ,@rest)))

(defun fnfor ())

(defun fnfor (a b fn)
	(funcall fn a)
	(if (not (eql a b))
			(fnfor (+ a 1) b fn)))

(defmacro for (i from a to b &rest do)
	`(fnfor ,a ,b (lambda (,i) ,@do)))

(defun drawgrid (x y nx ny dx dy)
	(for i from 1 to 10
			 (draw-line x (+ y (* i dy)) (+ x (* (- nx 1) dx)) y)
			 (draw-line (+ x (* i dx)) y x (+ y (* (- ny 1) dy)))))

(jsc
 (make-canvas)
 (set-context)
 "context.fillStyle   = '#00f';"
 "context.strokeStyle = '#f00';"
 "context.lineWidth   = 4;"
 (draw-line 1 1 100 100)
 (drawgrid 0 0 100 100 10 10))

