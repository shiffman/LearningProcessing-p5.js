// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 8-1: A Car class and a Car object

var car; // Declare car object as a globle variable.

function setup() {
  createCanvas(480, 270);
  // Initialize Car object

  car = {
    c: color(175),
    xpos: width/2,
    ypos: height/2,
    xspeed: 3,
    display: function() { // Function.
      // The car is just a square
      rectMode(CENTER);
      stroke(0);
      fill(this.c);
      rect(this.xpos,this.ypos,20,10);
    },
    move: function() { // Function.
      this.xpos = this.xpos + this.xspeed;
      if (this.xpos > width) {
        this.xpos = 0;
      }
    }    
  };
}

function draw() {
  background(100);
  // Operate Car object.
  car.move(); // Operate the car object in draw( ) by calling object methods using the dots syntax.
  car.display();
}
