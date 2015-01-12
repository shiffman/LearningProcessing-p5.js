// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-4: Image sequence

var maxImages = 10; // Total # of images
var imageIndex = 0; // Initial image to be displayed is the first

// Declaring an array of images.
var images = new Array(maxImages); 

function preload() {
  // Loading the images into the array
  // Don't forget to put the JPG files in the data folder!
  for (var i = 0; i < images.length; i ++ ) {
    images[i] = loadImage("data/animal" + i + ".jpg" );
  }
}

function setup() {
  createCanvas(200, 200);
  frameRate(5);
}

function draw() {

  background(0);
  image(images[imageIndex], 0, 0);

  // increment image index by one each cycle
  // use modulo " % "to return to 0 once the end of the array is reached
  imageIndex = (imageIndex + 1) % images.length;
}
