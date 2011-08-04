#!/bin/sh
mkdir -p build
cat lisp/lib.lisp lisp/parse.lisp lisp/vops.lisp lisp/compile.lisp > build/teapot.lisp
node static/js/teapot.js --compile build/teapot.lisp > build/teapot.js && cp build/teapot.js static/js/teapot.js
rm -fr build

