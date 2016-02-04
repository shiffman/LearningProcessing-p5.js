// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-4: Using map()

function setup() {
  createCanvas(480, 270);
}

function draw() {

  var r = map(mouseX, 0, width, 0, 255);
  var b = map(mouseY, 0, height, 255, 0);
  background(r, 0, b);
}
