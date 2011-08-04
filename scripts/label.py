#!/usr/bin/env python
import sys
hex = "0123456789abcdef"
n = 2

k = 0
s = ''
for c in sys.argv[1]:
    k = 16*k + hex.index(c)
    n -= 1
    if n == 0:
        s += chr(k)
        k = 0
        n = 2
print s
        
