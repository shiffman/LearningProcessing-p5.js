// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 17-9: Using textWidth(), redo Example 17-4 (the text "mirror") to use a 
// non-fixed-width font with proper character spacing.



// Size of each cell in the grid, ratio of window size to video size
var videoScale = 12;
// Number of columns and rows in our system
var cols, rows;
// Variable to hold onto capture object
var video;

// A String and Font
var chars = "itwasadarkandstormynightthequickbrownfoxjumpedoverthelazydog";

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  //set up columns and rows
  cols = width/videoScale;
  rows = height/videoScale;
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();

  // Load the font
  textFont("Arial", 16);
}

function draw() { 

  video.loadPixels();
  //image(video,0,0,width,height);

  background(0);

  // Use a variable to count through chars in String
  var charcount = 0;

  // Begin loop for rows
  for ( var j = 0; j < rows; j++) {
    // Begin loop for columns, instead of pixel by pixel now
    // we move with a variable floating povar x,  based on character width
    var x = 0;
    while (x < width) {
      // Where are we, pixel-wise for y?
      var y = j * videoScale;
      // Where are we pixel-wise for x? Convert to int, scale down, and make sure we don't go offscreen 
      var pix = constrain(floor(x / videoScale), 0, cols - 1);

      // Looking up the appropriate color in the pixel array
      var loc = (pix + j * video.width)*4;
      var r = video.pixels[loc]; 
      var g = video.pixels[loc+1]; 
      var b = video.pixels[loc+2]; 

      // Displaying an individual character from the String
      // Instead of a rectangle
      fill(r, g, b);
      var ch = chars.charAt(charcount);
      text(ch, x, y);
      // Go on to the next character, loop back to zero at end
      charcount = (charcount + 1) % chars.length;
      // Move x according to character's widt
      x += textWidth(ch);
    }
  }
}

