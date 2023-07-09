#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    arguments = sys.argv[1:]
    num_arguments = len(arguments)
print(f"{num_arguments} argument{'s' if num_arguments != 1 else ''}.")
for i, arg in enumerate(arguments, start=1):
    print(f"{i}: {arg}")
