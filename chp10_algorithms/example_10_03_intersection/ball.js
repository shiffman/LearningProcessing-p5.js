// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-3: Bouncing ball with intersection

// Constructor
function Ball(tempR) {
  this.r = tempR;              // radius
  this.x = random(width);      // location
  this.y = random(height);
  this.xspeed = random(-5, 5); // speed
  this.yspeed = random(-5, 5);
  this.c = color(100, 50);

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
    fill(this.c);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    // After the ball is displayed, the color is reset back to a darker gray.
    this.c = color(100, 50);
  }

  // Whenever the balls are touching, this highlight() function is called 
  // and the color is darkened.
  this.highlight = function() { 
    this.c = color(0, 150);
  }
  
  // A function that returns true or false based on whether two circles intersect
  // If distance is less than the sum of radii the circles touch
  this.intersect = function(b) {

    // Objects can be passed into functions as arguments too! 
    var distance = dist(this.x, this.y, b.x, b.y); // Calculate distance

    // Compare distance to sum of radii
    if (distance < this.r + b.r) {
      return true;
    } else {
      return false;
    }
  }
}

