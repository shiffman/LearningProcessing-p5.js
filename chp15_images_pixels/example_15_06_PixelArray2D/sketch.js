// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-6: Setting pixels according to their 2D location

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
  loadPixels();

  // Two loops allow us to visit every column (x) and every row (y).

  // Loop through every pixel column
  for (var x = 0; x < width; x++ ) {
    // Loop through every pixel row
    for (var y = 0; y < height; y++ ) {

      // Use the formula to find the 1D location
      // The location in the pixel array is calculated via our formula: 1D pixel location = x + y * width      
      // We have to multiply by 4 b/c there are four elements
      // for each pixel: R, G, B, A    
      var loc = (x + y * width)*4; 

      if (x % 2 == 0) { // If we are an even column
        pixels[loc  ] = 255;
        pixels[loc+1] = 255;
        pixels[loc+2] = 255;
        pixels[loc+3] = 255;
      } else { // If we are an odd column
        pixels[loc  ] = 0;
        pixels[loc+1] = 0;
        pixels[loc+2] = 0;
        pixels[loc+3] = 255;     }
    }
  }

  updatePixels();
}
