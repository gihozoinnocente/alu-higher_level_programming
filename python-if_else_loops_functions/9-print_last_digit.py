#!/usr/bin/python3
def uppercase(str):
    uppercase_str = ""
    for char in str:
        uppercase_char = chr(
            ord(char) - 32) if 97 <= ord(char) <= 122 else char
        uppercase_str += uppercase_char

    print("{}\n{}".format(uppercase_str, ""))
