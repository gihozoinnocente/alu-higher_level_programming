#!/usr/bin/python3
def uppercase(s):
    for char in s:
        print(chr(ord(char) - 32), end='')
    print()


uppercase("best")
uppercase("Best School 98 Battery street")
