
// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-7: Video pixelation

import processing.video.*;

// Size of each cell in the grid, ratio of window size to video size
var videoScale = 8;
// Number of columns and rows in our system
var cols, rows;
// Variable to hold onto Capture object
Capture video;

function setup() {
  createCanvas(640, 480);

  // Initialize columns and rows
  cols = width / videoScale;
  rows = height / videoScale;
  video = new Capture(this, 80, 60);
  video.start();
}

function captureEvent(Capture video) {
  // Read image from the camera
  video.read();
}

function draw() {

  video.loadPixels();

  // Begin loop for columns
  for (var i = 0; i < cols; i++) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++) {

      // Where are we, pixel-wise?
      var x = i * videoScale;
      var y = j * videoScale;
      // Looking up the appropriate color in the pixel array
      color c = video.pixels[i + j * video.width];
      fill(c);
      stroke(0);
      rect(x, y, videoScale, videoScale);
    }
  }
}

