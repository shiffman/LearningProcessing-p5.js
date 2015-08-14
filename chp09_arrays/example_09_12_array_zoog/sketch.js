// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-12: 200 Zoog objects in an array

// The only difference between this example and the previous chapter (Example 8-3) 
// is the use of an array for multiple Zoog objects.
var zoogies = [];

function setup() {
  createCanvas(480, 270);
  for (var i = 0; i < 100; i ++ ) {
    zoogies[i] = new Zoog(random(width),random(height),30,30,8);
  }
}

function draw() {
  background(51); // Draw a black background
  for (var i = 0; i < zoogies.length; i++) {
    zoogies[i].display();
    zoogies[i].jiggle();
  }
}
