// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-13: FFT

// A Sample object (for a sound)
var song;

var fft;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}

function setup() {
  createCanvas(512, 360);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.play();
  song.loop();

  // Create the FFT analyzer
  fft = new p5.FFT();
}

function draw() {
  background(200);

  var spectrum = fft.analyze();

  for (var i = 0; i < spectrum.length; i++) {
    stroke(0);
    // The FFT range is between 0 and 1, we map it to pixels
    var y = map(spectrum[i], 0, 255, height, 0);
    line(i, height, i, y);
  }
}