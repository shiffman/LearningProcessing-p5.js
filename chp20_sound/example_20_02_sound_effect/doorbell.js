// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-2: Doorbell with Sonia

// Create the doorbell
class Doorbell {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  // Is a point inside the doorbell? (used for mouse rollover, etc.)
  contains(mx, my) {
    if (dist(mx, my, this.x, this.y) < this.r) {
      return true;
    } else {
      return false;
    }
  }

  // Show the doorbell (hardcoded colors, could be improved)
  display(mx, my) {
    if (this.contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
