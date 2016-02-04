// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-2: Bouncing ball class

// Constructor
function Ball(tempR) {
  this.r = tempR;              // radius
  this.x = random(width);      // location
  this.y = random(height);
  this.xspeed = random(-5, 5); // speed
  this.yspeed = random(-5, 5);

  this.move = function() {
    this.x += this.xspeed; // Increment x
    this.y += this.yspeed; // Increment y

    // Check horizontal edges
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }
    //Check vertical edges
    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }
  }

  // Draw the ball
  this.display = function() {
    stroke(0);
    fill(0, 50);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

