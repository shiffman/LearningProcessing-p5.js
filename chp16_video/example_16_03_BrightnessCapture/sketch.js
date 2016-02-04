// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-8: Adjusting image brightness

var video;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();
}

function draw() {
  loadPixels();

  // We must also call loadPixels() on the PImage since we are going to read its pixels.
  video.loadPixels();
  for (var y = 0; y < video.height; y++ ) {
    for (var x = 0; x < video.width; x++ ) {
      var loc = (x + y * video.width) * 4;
      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = video.pixels[loc   ]; 
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];

      // We calculate a multiplier ranging from 0.0 to 8.0 based on mouseX position. 
      // That multiplier changes the RGB value of each pixel.      
      var adjustBrightness = map(mouseX, 0, width, 0, 8); 
      r *= adjustBrightness;
      g *= adjustBrightness;
      b *= adjustBrightness;
      
      // Set the display pixel to the image pixel
      pixels[loc    ] = r;
      pixels[loc + 1] = g;
      pixels[loc + 2] = b;
      pixels[loc + 3] = 255; // Always have to set alpha
    }
  }

  updatePixels();
}
