// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-10: Amplitude analysis

// A Sample object (for a sound)
var song;

var amplitude;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}


function setup() {
  createCanvas(480, 270);
  song.play();
  song.loop();

  // create a new Amplitude analyzer
  amplitude = new p5.Amplitude();

}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = amplitude.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+vol*200, 10+vol*200);
}