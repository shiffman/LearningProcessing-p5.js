// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-1: Inheritance


function Shape(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  
  // A generic shape does not really know how to be displayed. 
  // This will be overridden in the child classes.
  this.display = function() {
    point(this.x, this.y); 
  }
}

Shape.prototype.jiggle = function() {
  this.x += random(-1, 1);
  this.y += random(-1, 1);
}
