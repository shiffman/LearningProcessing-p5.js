// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 17-5: Take the bouncing ball example from Chapter 5.
// Display the X and Y coordinates as text next to the ball.

// This answer also incorporates movement along the y-axis, as
// well as object orientation

var b;

function setup() {
  createCanvas(480, 270);
  b = new Ball(150, 100, 1, 1);
  textFont("Arial", 12);
}

function draw() {
  background(255);
  b.move();
  b.display();
}

