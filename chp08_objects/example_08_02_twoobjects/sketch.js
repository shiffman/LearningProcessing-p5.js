// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-2: Two Car objects

var car1;
var car2; // Two objects!

function setup() {
  createCanvas(480, 270);
  car1 = new Car(color(127),0,100,2); // Parameters go inside the parentheses when the object is constructed.
  car2 = new Car(color(175),0,300,1);
}

function draw() {
  background(51);
  car1.move();
  car1.display();
  car2.move();
  car2.display();
}

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
