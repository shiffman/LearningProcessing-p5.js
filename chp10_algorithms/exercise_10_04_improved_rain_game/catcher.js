// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 10-4: The raindrop catching game

class Catcher {
  constructor(tempR) {
    this.r = tempR; // radius
    this.col = color(50, 10, 10, 150);
    this.x = 0;     // location
    this.y = 0;
  }


  setLocation(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
  }

  display() {
    stroke(0);
    fill(175);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  // A function that returns true or false based on
  // if the catcher intersects a raindrop
  intersect(d) {
    // Calculate distance
    var distance = dist(this.x, this.y, d.x, d.y);

    // Compare distance to sum of radii
    if (distance < this.r + d.r) {
      return true;
    } else {
      return false;
    }
  }
}
