// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 14-15: Rotating many things using objects

// Rotater constructor
function Rotater(tempX, tempY, tempSpeed, tempW) {

  this.x = tempX;           // x location
  this.y = tempY;           // y location
  this.theta = 0;           // angle of rotation (always initialized to 0)
  this.speed = tempSpeed;   // speed of rotation
  this.w = tempW;           // size of rectangle

  // Increment angle
  this.spin = function() {
    this.theta += this.speed;
  }

  // Display rectangle
  this.display = function() {
    rectMode(CENTER);
    stroke(0);
    fill(0, 100);
    // push() and pop() are called inside the class' display() method. 
    // This way, every Rotater object is rendered with its own independent translation and rotation!
    push(); 
    translate(this.x, this.y);
    rotate(this.theta);
    rect(0, 0, this.w, this.w);
    pop();
  }
}

