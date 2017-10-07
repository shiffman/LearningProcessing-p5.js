// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-4: Super fancy ArrayList and rectangle particle system

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
    this.life = 255;
  }

  run() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  gravity() {
    this.yspeed += 0.1;
  }

  // Stop moving
  stop() {
    this.xspeed = 0;
    this.yspeed = 0;
  }

  // Ready for deletion
  finished() {
    // The Particle has a "life" variable which decreases.
    // When it reaches 0 the Particle can be removed from the ArrayList.
    this.life -= 2.0;
    if (this.life < 0) return true;
    else return false;
  }

  // Show
  display() {
    // Life is used to fade out the particle as well
    stroke(0, this.life);
    fill(175, this.life);
    ellipse(this.x, this.y, 10, 10);
  }

}
