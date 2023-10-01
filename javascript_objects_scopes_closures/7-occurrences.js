#!/usr/bin/node
exports.nbOccurences = function (list, searchNumber) {
  let occurenceCount = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchNumber) {
      occurenceCount++;
    }
  }
  return occurenceCount;
};
