// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-1: A Car class and a Car object

let car; // Declare car object as a global variable.

function setup() {
  createCanvas(480, 270);
  // Initialize Car object
  car = new Car();
}

function draw() {
  background(100);
  // Operate Car object.
  car.move(); // 
  car.display();
}

class Car {
  constructor(c, x, y, xspeed) {
    this.c = color(175);
    this.x = width/2;
    this.y = height/2;
    this.xspeed = 3;
  }

  display() { 
    // The car is just a square
    rectMode(CENTER);
    stroke(0);
    fill(this.c);
    rect(this.x, this.y, 20, 10);
  }

  move() { 
    this.x = this.x + this.xspeed;
    if (this.x > width) {
      this.x = 0;
    }
  }
}
