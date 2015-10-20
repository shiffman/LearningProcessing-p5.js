// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-11: mic threshold

// A Sample object (for a sound)
var input;

function setup() {
  createCanvas(480, 270);
  background(200);

  // Start listening to the microphone
  input = new p5.AudioIn();
  input.start();

}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var volume = input.getLevel();

  // If the volume is greater than 0.5 a rectangle is drawn at a random location in the window. 
  // The louder the volume, the larger the rectangle.
  var threshold = 0.1;
  if (volume > threshold) {
    stroke(0);
    fill(0, 100);
    rect(random(40, width), random(height), 20, 20);
  }

  // Graph the overall volume and show threshold
  var y = map(volume, 0, 1, height, 0);
  var ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle size according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}