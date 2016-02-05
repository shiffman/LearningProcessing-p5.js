// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-4: Text mirror 

// Size of each cell in the grid, ratio of window size to video size
var videoScale = 10;
// Number of columns and rows in our system
var cols, rows;
// Variable to hold onto capture object
var video;

// The source text used in the mosaic pattern. A longer String might produce more interesting results.
var chars = "helloworld" ; 


function setup() {
  createCanvas(480, 360);
  // Set up columns and rows
  cols = width / videoScale;
  rows = height / videoScale;
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();

}


function draw() {
  background(0);

  // Using a fixed-width font. In most fonts, individual characters have different widths. 
  // In a fixed-width font, all characters have the same width. 
  // This is useful here since we intend to display the letters one at a time spaced out evenly. 
  // See Section 17.7 for how to display text character by character with a nonfixed width font.


  video.loadPixels();
  textFont("Courier");

  // Use a variable to count through chars in String
  var charcount = 0;
  // Begin loop for rows
  for (var j = 0; j < rows; j++ ) {
    // Begin loop for columns
    for (var i = 0; i < cols; i++ ) {

      var loc = (i + j * video.width) * 4;

      // Looking up the appropriate color in the pixel array
      var r = video.pixels[loc];
      var g = video.pixels[loc+1];
      var b = video.pixels[loc+2];
      // Displaying an individual character from the String instead of a rectangle
      fill(r, g, b);

      // One character from the source text is displayed colored accordingly to the pixel location. 
      // A counter variable charcount is used to walk through the source String one character at a time.
      text(chars.charAt(charcount), i*videoScale, j*videoScale);

      // Go on to the next character
      charcount = (charcount + 1) % chars.length;
    }
  }
}

