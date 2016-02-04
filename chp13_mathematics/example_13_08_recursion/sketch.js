// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-8: Recursion

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);
  stroke(0);
  noFill();
  drawCircle(width/2, height/2, 200);
}

function drawCircle(x, y, radius) {
  ellipse(x, y, radius, radius);
  if (radius > 2) {
    // drawCircle() calls itself twice, creating a branching effect. 
    // For every circle, a smaller circle is drawn to the left and right.
    drawCircle(x + radius/2, y, radius/2);
    drawCircle(x - radius/2, y, radius/2);
  }
}

