// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-12: Pixel neighbor differences (edges)

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
 
  // Since we are looking at left neighbors
  // We skip the first column
  for (var x = 1; x < source.width; x++ ) {
    for (var y = 0; y < source.height; y++ ) {
      var loc = (x + y * source.width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = source.pixels[loc   ]; 
      var g = source.pixels[loc + 1];
      var b = source.pixels[loc + 2];
      
      // Pixel to the left location and color
      var leftLoc = ((x - 1) + y * source.width) * 4;
      var rleft = source.pixels[leftLoc   ]; 
      var gleft = source.pixels[leftLoc + 1];
      var bleft = source.pixels[leftLoc + 2];      
      // New color is difference between pixel and left neighbor
      var diff = abs((r+g+b)/3 - (rleft+gleft+bleft)/3);
      destination.pixels[loc    ] = diff;
      destination.pixels[loc + 1] = diff;
      destination.pixels[loc + 2] = diff;
      destination.pixels[loc + 3] = 255; // Always have to set alpha
    }
  }
  
  // We changed the pixels in destination
  destination.updatePixels();
  // Display the destination
  image(destination, 0, 0);
  noLoop();
}
