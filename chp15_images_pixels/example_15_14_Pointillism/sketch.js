// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-14: "Pointillism"

var img;
var pointillize = 16;

function preload() {
  img = loadImage("data/sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  
  // Pick a random point
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var loc = (x + y*img.width) * 4;
  
  // Look up the RGB color in the source image
  img.loadPixels();
  var r = img.pixels[loc    ];
  var g = img.pixels[loc + 1];
  var b = img.pixels[loc + 2];
  noStroke();
  
  // Back to shapes! Instead of setting a pixel, we use the color 
  // from a pixel to draw a circle.
  fill(r, g, b, 100);
  ellipse(x, y, pointillize, pointillize); 
}