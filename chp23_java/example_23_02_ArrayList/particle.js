// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-2: Simple particle system with ArrayList

// A simple Particle class

function Particle() {
  this.x = mouseX;
  this.y = mouseY;
  this.xspeed = random(-1, 1);
  this.yspeed = random(-2, 0);
  
  this.run = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  
  this.gravity = function() {
    this.yspeed += 0.1;
  }
  
  this.display = function() {
    stroke(0);
    fill(0, 75);
    ellipse(this.x, this.y, 10, 10);
  }
}
