// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-7: Displaying the pixels of an image

var img;

function preload() {
  img = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  // Temporary-ish fix for retina machines
  pixelDensity(1);
}

function draw() {
  loadPixels();

  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  img.loadPixels();
  for (var y = 0; y < height; y++ ) {
    for (var x = 0; x < width; x++ ) {
      var loc = (x + y * width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = img.pixels[loc   ]; 
      var g = img.pixels[loc + 1];
      var b = img.pixels[loc + 2];

      // Image Processing would go here
      // If we were to change the RGB values, we would do it here, before setting the pixel in the display window.

      // Set the display pixel to the image pixel
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}
