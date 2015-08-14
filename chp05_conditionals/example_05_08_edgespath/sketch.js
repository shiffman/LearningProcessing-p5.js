// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 5-8: Square following edge, uses a �state� variable

var x = 0;  // x location of square
var y = 0;  // y location of square

var speed = 5;  // speed of square

// A variable to keep track of the square�s "state."  
// Depending on the value of its state, it will either move right, down, left, or up.
var state = 0;  

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(51);

  // Display the square
  stroke(0);
  fill(175);
  rect(x,y,19,19);

  // If the state is 0, move to the right.
  if (state == 0) {
    x = x + speed;
    // If, while the state is 0, it reaches the right side of the window, change the state to 1
    // Repeat this same logic for all states!?
    if (x > width-20) {
      x = width-20;
      state = 1;
    }
  } else if (state == 1) {
    y = y + speed;
    if (y > height-20) {
      y = height-20;
      state = 2;
    }
  } else if (state == 2) {
    x = x - speed;
    if (x < 0) {
      x = 0;
      state = 3;
    }
  } else if (state == 3) {
    y = y - speed;
    if (y < 0) {
      y = 0;
      state=0;
    }
  }
}







