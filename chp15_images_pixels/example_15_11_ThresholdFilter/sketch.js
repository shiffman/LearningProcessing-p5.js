// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-11: Brightness threshold with filter

var img;

function preload() {
  img = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Draw the image
  image(img, 0, 0);
  // Filter the window with a threshold effect
  // 0.5 means threshold is 50% brightness
  filter("threshold", 0.5);
  noLoop();
}

