// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-12: Simple background removal

var video;

// Saved background
var backgroundImage;

// How different must a pixel be to be a foreground pixel
var threshold = 20;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Create an empty image the same size as the video
  backgroundImage = createImage(video.width, video.height, RGB);
}

function draw() {
  
  // We are going to look at everything's pixels
  loadPixels();
  video.loadPixels();
  backgroundImage.loadPixels();

  // Before we begin searching, the "world record" for closest color is set to a high number that is easy for the first pixel to beat.
  var worldRecord = 500; 

  // XY coordinate of closest color
  var closestX = 0;
  var closestY = 0;

  for (var y = 0; y < video.height; y++ ) {
    for (var x = 0; x < video.width; x++ ) {
      var loc = (x + y * video.width) * 4;
      
      // Step 2, what is the foreground color
      var r1 = video.pixels[loc   ]; 
      var g1 = video.pixels[loc + 1];
      var b1 = video.pixels[loc + 2];

      // Step 3, what is the background color
      var r2 = backgroundImage.pixels[loc   ]; 
      var g2 = backgroundImage.pixels[loc + 1];
      var b2 = backgroundImage.pixels[loc + 2];

      // Step 4, compare the foreground and background color
      var diff = dist(r1, g1, b1, r2, g2, b2);

      // Step 5, Is the foreground color different from the background color
      if (diff > threshold) {
        // If so, display the foreground color
        pixels[loc] = r1;
        pixels[loc+1] = g1;
        pixels[loc+2] = b1;
        pixels[loc+3] = 255;
      } else {
        // If not, display green
        pixels[loc] = 0;
        pixels[loc+1] = 255;
        pixels[loc+2] = 0;
        pixels[loc+3] = 255;      
      }
    }
  }

  updatePixels();
}


function mousePressed() {
  // Copying the current frame of video into the backgroundImage object
  // Note copy takes 5 arguments:
  // The source image
  // x, y, width, and height of region to be copied from the source
  // x, y, width, and height of copy destination
  video.loadPixels();
  backgroundImage.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height);
}

