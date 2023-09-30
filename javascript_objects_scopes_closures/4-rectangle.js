#!/usr/bin/node#!/usr/bin/node
class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return {}; // Create an empty object if conditions are not met
    }

    this.width = w;
    this.height = h;
  }

  print () {
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
  rotate() {
    // Exchange the width and height of the rectangle
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double() {
    // Double the width and height of the rectangle
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle; // Export the Rectangle class
