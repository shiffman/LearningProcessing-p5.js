// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-2: Simple particle system with ArrayList

// A simple Particle class

class Particle {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.xspeed = random(-1, 1);
    this.yspeed = random(-2, 0);
  }

  run() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  gravity() {
    this.yspeed += 0.1;
  }

  display() {
    stroke(0);
    fill(0, 75);
    ellipse(this.x, this.y, 10, 10);
  }
}
