// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 4-2: Using variables

// Declare and initialize two integer variables at the top of the code.
var circleX = 100;
var circleY = 100;

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);
  stroke(0);
  fill(175);
  // Use the variables to specify the location of an ellipse.
  ellipse(circleX,circleY,50,50);
}

