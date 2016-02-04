// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-6: Drawing a grid of squares

// Size of each cell in the grid, ratio of window size to video size
// 40 * 16 = 640
// 30 * 16 = 480
var videoScale = 16;

// Number of columns and rows in our system
var cols, rows;

function setup() {
  createCanvas(640, 480);

  // Initialize columns and rows
  cols = width/videoScale;
  rows = height/videoScale;

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function draw() {
  video.loadPixels();

  // Begin loop for columns
  for (var i = 0; i < cols; i++) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++) {
      // Scaling up to draw a rectangle at (x,y)
      var loc = (i + j * cols) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = video.pixels[loc   ]; 
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];
      fill(r,g,b);
      stroke(0);
      // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
      var x = i*videoScale;
      var y = j*videoScale;
      rect(x, y, videoScale, videoScale);
    }
  }
}

