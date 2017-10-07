// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-1: Inheritance

// Child class constructor
class Square extends Shape { // Inherit from the parent class with 'extends'
  constructor(x, y, r) {
    // Variables are inherited from the parent.
    // We could also add variables unique to the Square class if we so desire
    super(x, y, r);
  }

  // Inherits jiggle() from parent

  // The square overrides its parent for display.
  display() {
    rectMode(CENTER);
    fill(175);
    stroke(0);
    rect(this.x, this.y, this.r, this.r);
  }
};
