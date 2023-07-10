#!/usr/bin/python3
import dis
import marshal


def print_module_names():
    with open('\hidden_4.pyc', 'rb') as file:
        bytecode = file.read()

    code_obj = marshal.loads(bytecode[8:])

    instructions = dis.get_instructions(code_obj)
    names = set()

    for instr in instructions:
        if instr.opname == 'LOAD_GLOBAL':
            name = instr.argval
            if not name.startswith('__'):
                names.add(name)

    for name in sorted(names):
        print(name)


if __name__ == '__main__':
    print_module_names()
