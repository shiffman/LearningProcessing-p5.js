// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-1: "Hello World" images

// Declaring a variable of type PImage, a class available to us from the Processing core library.
var img; 

function preload() {
  // Make a new instance of a PImage by loading an image file
  img = loadImage("data/mysummervacation.jpg");  
}

function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(0);
  //The image() function displays the image at a location-in this case the point (0,0).
  image(img, 0, 0);
}
