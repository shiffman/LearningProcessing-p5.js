// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-1: Inheritance


// Child class constructor
function Circle(x, y, r, c) {
  // Inherits all instance variables from parent + adding one
  this.c = c;

  Shape.call(this, x, y, r);

  // Call the parent jiggle, but do some more stuff too
  this.jiggle = function() {
    Shape.prototype.jiggle.call(this);
    // The Circle jiggles its size as well as its x,y location.
    this.r += random(-1, 1); 
    this.r = constrain(this.r, 0, 100);
  }
  
  // The changeColor() function is unique to the Circle class.
  this.changeColor = function() { 
    this.c = color(random(255));
  }
  
  this.display = function() {
    ellipseMode(CENTER);
    fill(this.c);
    stroke(0);
    ellipse(this.x, this.y, this.r, this.r);
  }
};

// Inherit from the parent class
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Shape;
