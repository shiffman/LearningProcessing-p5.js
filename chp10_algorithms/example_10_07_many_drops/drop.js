// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-7: Drops one at a time

function Drop() {
  this.r = 8;                 // All raindrops are the same size
  this.x = random(width);     // Start with a random x location
  this.y = -this.r*4;              // Start a little above the window
  this.speed = random(1, 5);   // Pick a random speed
  this.c = color(50, 100, 150); // Color

  // Move the raindrop down
  this.move = function() {
    // Increment by speed
    this.y += this.speed;
  }

  // Check if it hits the bottom
  this.reachedBottom = function() {
    // If we go a little beyond the bottom
    if (this.y > height + this.r*4) { 
      return true;
    } else {
      return false;
    }
  }

  // Display the raindrop
  this.display = function() {
    // Display the drop
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  // If the drop is caught
  this.caught = function() {
    // Stop it from moving by setting speed equal to zero
    this.speed = 0; 
    // Set the location to somewhere way off-screen
    this.y = -1000;
  }
}

