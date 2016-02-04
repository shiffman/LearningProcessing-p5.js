// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-1: Catcher

function Catcher(tempR) {
  this.r = tempR; // radius
  this.x = 0;     // location
  this.y = 0;

  this.setLocation = function(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  this.display = function() {
    stroke(0);
    fill(175);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
