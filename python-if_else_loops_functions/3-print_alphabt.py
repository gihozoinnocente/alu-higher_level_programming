#!/usr/bin/python3for i in range(97, 123):
    letter = chr(i)
    if letter not in ['q', 'e']:
        print("{}".format(letter), end='')
