// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 3-4: Drawing a continuous line
function setup() {
  createCanvas(480, 270);
  background(255);
}

function draw() {
  stroke(0);
  
  // Draw a line from previous mouse location to current mouse location.
  line(pmouseX, pmouseY, mouseX, mouseY);
}
