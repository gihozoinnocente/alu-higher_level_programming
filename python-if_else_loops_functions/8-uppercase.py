#!/usr/bin/python3
def uppercase(s):
    uppercase_str = ""
    for char in s:
        uppercase_str += "{}".format(chr(ord(char) - 32))
    print("{}".format(uppercase_str))
