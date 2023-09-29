#!/usr/bin/node

function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1; // Factorial of NaN or negative number is 1
  } else if (n === 0 || n === 1) {
    return 1; // Factorial of 0 and 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

// Get the integer from the command line argument
const arg = process.argv[2];
const number = parseInt(arg);

// Check if the argument is a valid integer
if (isNaN(number) || !Number.isInteger(number)) {
  console.log("1");
} else {
  // Calculate the factorial using the recursive function
  const result = factorial(number);

  // Print the result
  console.log(`${result}`);
}
