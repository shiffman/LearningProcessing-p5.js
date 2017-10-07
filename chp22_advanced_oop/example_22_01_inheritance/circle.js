// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-1: Inheritance


// Child class constructor
class Circle extends Shape { // Inherit from the parent class with 'extends'
  constructor(x, y, r, c) {
    // Inherits all instance variables from parent + adding one
    super(x, y, r);
    this.c = c;
  }

  // Call the parent jiggle, but do some more stuff too
  jiggle() {
    super.jiggle();
    // The Circle jiggles its size as well as its x,y location.
    this.r += random(-1, 1);
    this.r = constrain(this.r, 0, 100);
  }

  // The changeColor() function is unique to the Circle class.
  changeColor() {
    this.c = color(random(255));
  }

  display() {
    ellipseMode(CENTER);
    fill(this.c);
    stroke(0);
    ellipse(this.x, this.y, this.r, this.r);
  }
};
