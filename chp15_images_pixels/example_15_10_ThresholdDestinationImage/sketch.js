// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-10: Brightness threshold

var source;
var destination; // Destination image

function preload() {
  source = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  destination = createImage(source.width, source.height, RGB);

  // Temporary-ish fix for retina machines
  pixelDensity(1);
}

function draw() {
  var threshold = 127;
  
  // We are going to look at both image's pixels
  source.loadPixels();
  destination.loadPixels();
 
  for (var y = 0; y < source.height; y++ ) {
    for (var x = 0; x < source.width; x++ ) {
      var loc = (x + y * source.width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = source.pixels[loc   ]; 
      var g = source.pixels[loc + 1];
      var b = source.pixels[loc + 2];

      // Test the brightness against the threshold
      var result;
      if ((r + g + b) / 3 > threshold){
        result = 255; // White
      } else {
        result = 0;   // Black
      }
      destination.pixels[loc    ] = result;
      destination.pixels[loc + 1] = result;
      destination.pixels[loc + 2] = result;
      destination.pixels[loc + 3] = 255; // Always have to set alpha
    }
  }
  
  // We changed the pixels in destination
  destination.updatePixels();
  // Display the destination
  image(destination,0,0);
  noLoop();
}
