#!/usr/bin/node

const firstArg = process.argv[2];
const isNumber = parseInt(firstArg);

if (!isNumber) {
  console.log('Not a number');
} else {
  console.log(`My number: ${isNumber}`);
}
