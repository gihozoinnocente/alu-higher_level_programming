#!/usr/bin/python3
def uppercase(s):
    for char in s:
        print(chr(ord(char) & 223), end="")
    print()
