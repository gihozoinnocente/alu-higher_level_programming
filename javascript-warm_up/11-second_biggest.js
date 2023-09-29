#!/usr/bin/node
// Get the command line arguments
const args = process.argv.slice(2);
// Check if no arguments were passed or only one argument was passed
if (args.length === 0 || args.length === 1) {
  console.log("0");
} else {
  // Convert the arguments to an array of integers
  const integers = args.map(arg => parseInt(arg));
  // Remove any NaN values and duplicates
  const uniqueIntegers = [...new Set(integers.filter(num => !isNaN(num)))];
  // Sort the unique integers in descending order
  uniqueIntegers.sort((a, b) => b - a);
  // If there's a second largest integer, print it; otherwise, print 0
  if (uniqueIntegers.length >= 2) {
    console.log(uniqueIntegers[1]);
  } else {
    console.log("0");
  };
};

