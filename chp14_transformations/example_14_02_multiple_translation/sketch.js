// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 14-2: Multiple translations

var r = 8;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);
  stroke(0);
  fill(175);

  // Grab mouse coordinates, constrained to window
  var mx = constrain(mouseX, 0, width);
  var my = constrain(mouseY, 0, height);

  // Translate to the mouse location
  translate(mx, my);
  ellipse(0, 0, 8, 8);

  // Translate 100 pixels to the right
  translate(100, 0);
  ellipse(0, 0, 8, 8);

  // Translate 100 pixels down
  translate(0, 100);
  ellipse(0, 0, 8, 8);

  // Translate 100 pixels left
  translate(-100, 0);
  ellipse(0, 0, 8, 8);
}
