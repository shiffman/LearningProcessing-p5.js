// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-3: Swapping images

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


}

function draw() {
  // Displaying one image
  image(images[imageIndex], 0, 0);
}

function mousePressed() {
  // A new image is picked randomly when the mouse is clicked
  // Note the index to the array must be an integer!
  imageIndex = int(random(images.length));
}
