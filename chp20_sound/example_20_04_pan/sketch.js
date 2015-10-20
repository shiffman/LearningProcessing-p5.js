// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-4: Manipulating sound

// A sound file object
var song;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}

function setup() {
  createCanvas(200, 200);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.play();
  song.loop();
}

function draw() {
  background(200);
  // Map mouseX  to a panning value (between -1.0 and 1.0)
  var panning = map(mouseX, 0., width, -1.0, 1.0);
  song.pan(panning);
  
  // Draw a circle
  stroke(0);
  fill(51, 100);
  ellipse(mouseX, 100, 48, 48);
}