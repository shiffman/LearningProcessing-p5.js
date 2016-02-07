// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-1: Inheritance

// Child class constructor
function Square(x, y, r) {
  // Variables are inherited from the parent.
  // We could also add variables unique to the Square class if we so desire
  Shape.call(this, x, y, r);

  // Inherits jiggle() from parent

  // The square overrides its parent for display.
  this.display = function() {
    rectMode(CENTER);
    fill(175);
    stroke(0);
    rect(this.x, this.y, this.r, this.r);
  }
};

// Inherit from the parent class
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Shape;