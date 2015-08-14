// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 5-9: Rewrite Example 5-6 so that the ball not 
// only moves horizontally, but vertically as well. 
// Can you implement additional features, such as changing 
// the size or color of the ball based on certain 
// conditions? 
// Can you make the ball speed up or slow down in 
// addition to changing direction?

var x = 0;
var speed = 1;

function setup() {
  createCanvas(200,200);
}

function draw() {
  background(255);

  // Add the current speed to the x location.
  x = x + speed;

  // Remember, || means "or."
  if ((x > width) || (x < 0)) {
    // If the object reaches either edge, multiply speed by -1 to turn it around.
    speed = speed * -1;
  }

  // Display circle at x location
  stroke(0);
  fill(175);
  ellipse(x,100,32,32);
}
