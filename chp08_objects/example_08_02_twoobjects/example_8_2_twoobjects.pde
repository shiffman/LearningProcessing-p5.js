// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-2: Two Car objects

Car myCar1;
Car myCar2; // Two objects!

function setup() {
  createCanvas(480, 270);
  myCar1 = new Car(color(51),0,100,2); // Parameters go inside the parentheses when the object is constructed.
  myCar2 = new Car(color(151),0,300,1);
}

function draw() {
  background(255);
  myCar1.move();
  myCar1.display();
  myCar2.move();
  myCar2.display();
}

class Car { // Even though there are multiple objects, we still only need one class. No matter how many cookies we make, only one cookie cutter is needed.Isn’t object-oriented programming swell?
  color c;
  var xpos;
  var ypos;
  var xspeed;

  Car(color tempC, var tempXpos, var tempYpos, var tempXspeed) { // The Constructor is defined with arguments.
    c = tempC;
    xpos = tempXpos;
    ypos = tempYpos;
    xspeed = tempXspeed;
  }

  function display() {
    stroke(0);
    fill(c);
    rectMode(CENTER);
    rect(xpos,ypos,20,10);
  }

  function move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}
