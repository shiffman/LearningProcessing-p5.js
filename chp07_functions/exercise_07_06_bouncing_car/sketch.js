// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 7-6: Here is the bouncing ball from Example 5-6 combined with 
// the drawCar() function. Fill in the blanks so that you now have a bouncing
// car with parameter passing! (Note that the global variables are now named 
// globalX and globalY to afunction confusion with the local variables x and y in 
// drawCar()).

var globalX = 0;
var globalY = 100;
var speed = 1;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);
  move();
  bounce();
  drawCar(globalX, globalY, 24, color(100));
}

function move() {
  // Change the x location by speed
  globalX = globalX + speed;
}

function bounce() {
  if ((globalX > width) || (globalX < 0)) {
    speed = speed * -1;
  }
}

function drawCar(x, y, thesize, c) {
  var offset = thesize / 4;
  rectMode(CENTER);
  stroke(0);
  fill(c);
  rect(x, y, thesize, thesize/2);
  fill(200);
  rect(x - offset, y - offset, offset, offset/2);
  rect(x + offset, y - offset, offset, offset/2);
  rect(x - offset, y + offset, offset, offset/2);
  rect(x + offset, y + offset, offset, offset/2);
}
