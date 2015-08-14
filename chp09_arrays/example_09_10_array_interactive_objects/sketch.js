// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-10: Interactive stripes

// An array of stripes
var stripes = [];

function setup() {
  createCanvas(480, 270);
  
  // Initialize all Stripe objects
  for (var i = 0; i < 10; i ++ ) {
    stripes.push(new Stripe());
  }
}

function draw() {
  
  background(100);
  // Move and display all Stripe objects
  for (var i = 0; i < stripes.length; i ++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX,mouseY); // Passing the mouse coordinates into an object.
    stripes[i].move();
    stripes[i].display();
  }
}
