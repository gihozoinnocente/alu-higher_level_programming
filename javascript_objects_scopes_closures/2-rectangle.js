#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Create an empty object and return it
    }
    this.width = w;
    this.height = h;
  }
}
module.exports = Rectangle;
