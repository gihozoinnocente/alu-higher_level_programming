#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Create an empty object if conditions are not met
    }

    this.width = w;
    this.height = h;
  }

  print() {
    if (this.width <= 0 || this.height <= 0) {
      return; // If width or height is zero or negative, do nothing
    }

    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += 'X';
      }
      console.log(row);
    }
  }
}

module.exports = Rectangle; // Export the Rectangle class
