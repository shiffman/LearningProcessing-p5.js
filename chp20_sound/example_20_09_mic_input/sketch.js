// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-9: Mic input

// A Sample object (for a sound)
var input;

function setup() {
  createCanvas(480, 270);

  input = new p5.AudioIn();
  input.start();

}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = input.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}