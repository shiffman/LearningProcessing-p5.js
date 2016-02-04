// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-1: Catcher

var catcher;

function setup() {
  createCanvas(480, 270);
  catcher = new Catcher(32);
}

function draw() {
  background(255);
  catcher.setLocation(mouseX, mouseY);
  catcher.display();
}

