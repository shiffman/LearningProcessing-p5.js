// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 7-2: Calling a function

function setup() {
 createCanvas(100,100);
}

function draw() {
  background(255);
  drawBlackCircle();
}

function drawBlackCircle() {
  fill(0);
  ellipse(50,50,20,20);
}
