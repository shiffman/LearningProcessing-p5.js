// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-9: An array of Car objects

// Even though there are multiple objects, we still only need one constructor function. 
// No matter how many cookies we make, only one cookie cutter is needed.Isn’t object-oriented programming swell?
function Car(tempC, tempXpos, tempYpos, tempXspeed) { // The Constructor is defined with arguments.
  this.c = tempC;
  this.xpos = tempXpos;
  this.ypos = tempYpos;
  this.xspeed = tempXspeed;

  this.display = function() {
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.xpos,this.ypos,20,10);
  }

  this.move = function() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }
}