// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 14-15: Rotating many things using objects

// An array of Rotater objects
var rotaters = new Array(20);

function setup() {
  createCanvas(480, 270);

  // Rotaters are made randomly
  for (var i = 0; i < rotaters.length; i++ ) {
    rotaters[i] = new Rotater(random(width), random(height), random(-0.1, 0.1), random(48));
  }
}

function draw() {
  background(255);

  // All Rotaters spin and are displayed
  for (var i = 0; i < rotaters.length; i++ ) {
    rotaters[i].spin();
    rotaters[i].display();
  }
}

