#!/usr/bin/python3
def uppercase(str):
    for char in str:
        print(chr(ord(char) - 32), end='')
        print()
uppercase("best")
uppercase("Best School 98 Battery street")
