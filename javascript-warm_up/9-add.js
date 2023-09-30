#!/usr/bin/node

const n = process.argv[2];
const m = process.argv[3];

const a = parseInt(n);
const b = parseInt(m);

function addition (a, b) {
  return (a + b);
}
console.log(addition(a, b));
