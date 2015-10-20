// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-12: mic double threshold

// A Sample object (for a sound)
var input;

var clapLevel = 0.3;  // How loud is a clap
var threshold = 0.1; // How quiet is silence
var clapping = false;

function setup() {
  createCanvas(480, 270);
  background(200);

  // Start listening to the microphone
  input = new p5.AudioIn();
  input.start();

}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var vol = input.getLevel();

  // If the volume is greater than 0.5, and we were not previously clapping, then we are clapping! 
  if (vol > clapLevel && !clapping) { 
    stroke(0);
    fill(0, 100);
    rect(random(40, width), random(height), 20, 20);
    clapping = true; // We are now clapping!
  } else if (clapping && vol < threshold) { 
    // Otherwise, if we were just clapping and the volume level has gone down below 0.25, then we are no longer clapping!
    clapping = false;
  }

  // Graph the overall volume
  // First draw a background strip
  noStroke();
  fill(175);
  rect(0, 0, 20, height);

  var y = map(vol, 0, 1, height, 0);
  var ybottom = map(threshold, 0, 1, height, 0);
  var ytop = map(clapLevel, 0, 1, height, 0);

  // Then draw a rectangle size according to volume
  fill(100);
  rect(0, y, 20, y);

  // Draw lines at the threshold levels
  stroke(0);
  line(0, ybottom, 19, ybottom);
  line(0, ytop, 19, ytop);
}