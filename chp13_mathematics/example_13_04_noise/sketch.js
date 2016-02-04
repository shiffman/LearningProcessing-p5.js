// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-4: Perlin noise

var time = 0.0;
var increment = 0.01;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);

  // Get a noise value at "time" and scale it according to the window's width.
  var n = noise(time) * width;

  // With each cycle, increment the " time "
  time += increment;

  // Draw the ellipse with size determined by Perlin noise
  fill(0);
  ellipse(width/2, height/2, n, n);
}

