// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 6-6: Rewrite Example 6-9 using a for loop.

function setup() {
  createCanvas(255, 255);
}
function draw() {
  background(0);
  // A for loop!
  for (var i = 0; i < width; i+= 10) {
    noStroke();
    var distance = abs(mouseX - i); // The distance between the current rectangle and the mouse is equal to the absolute value of the difference between i and mouseX.
    fill(distance); // That distance is used to fill the color of a rectangle at horizontal location i.
    rect(i, 0, 10, height);
  }
}
