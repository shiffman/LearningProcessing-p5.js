// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-13: Sharpen with convolution

var img;
var w = 80;
// The convolution matrix for a "sharpen" effect stored as a 3 x 3 two-dimensional array.
var matrix = [ [ -1, -1, -1 ] , 
               [ -1,  9, -1 ] ,
               [ -1, -1, -1 ] ];

function preload() {
  img = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  devicePixelScaling(false);
}

function draw() {
  
  // We're only going to process a portion of the image
  // so let's set the whole image as the background first
  image(img,0,0);
  
  // In this example we are only processing a section of the image-an 80 x 80 rectangle around the mouse location.  
  var xstart = constrain(mouseX-w/2,0,img.width); 
  var ystart = constrain(mouseY-w/2,0,img.height);
  var xend = constrain(mouseX + w/2,0,img.width);
  var yend = constrain(mouseY + w/2,0,img.height);
  var matrixsize = 3;
  
  loadPixels();
  img.loadPixels();
  // Begin our loop for every pixel
  for (var x = xstart; x < xend; x++ ) {
    for (var y = ystart; y < yend; y++ ) {
      // Each pixel location (x,y) gets passed into a function called convolution()
      // The convolution() function returns a new color to be displayed.
      var result = convolution(x ,y , matrix, matrixsize, img); 
      var loc = (x + y * img.width) * 4;
      pixels[loc    ] = result[0];
      pixels[loc + 1] = result[1];
      pixels[loc + 2] = result[2];
      pixels[loc + 3] = 255;
      
    }
  }
  updatePixels();
  stroke(0);
  noFill();
  rect(xstart,ystart,w,w);
}

function convolution(x, y, matrix, matrixsize, img) {
  var rtotal = 0.0;
  var gtotal = 0.0;
  var btotal = 0.0;
  var offset = floor(matrixsize / 2);
  
  // Loop through convolution matrix
  for (var i = 0; i < matrixsize; i++ ) {
    for (var j = 0; j < matrixsize; j++ ) {
      // What pixel are we testing
      var xloc = x + i-offset;
      var yloc = y + j-offset;
      var loc = (xloc + img.width * yloc) * 4;
      
      // Make sure we haven't walked off the edge of the pixel array
      // It is often good when looking at neighboring pixels to make sure we have not gone off the edge of the pixel array by accident.
      loc = constrain(loc, 0, img.pixels.length-1);
      // Calculate the convolution
      // We sum all the neighboring pixels multiplied by the values in the convolution matrix.
      rtotal += img.pixels[loc    ] * matrix[i][j];
      gtotal += img.pixels[loc + 1] * matrix[i][j];
      btotal += img.pixels[loc + 2] * matrix[i][j];
      //console.log(img.pixels[loc    ], matrix[i][j]);
    }
  }
  
  // Make sure RGB is within range
  rtotal = constrain(rtotal,0,255);
  gtotal = constrain(gtotal,0,255);
  btotal = constrain(btotal,0,255);
  
  // Return an array with the three color values
  return [rtotal,gtotal,btotal]; 
}
