#!/usr/bin/python3
def uppercase(s):
    for char in s:
        uppercase_char = chr(ord(char) - 32) if 97 <= ord(char) <= 122 else char
        print(f'{uppercase_char}', end='')
