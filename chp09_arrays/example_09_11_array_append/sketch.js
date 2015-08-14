// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-11: Resizing an array using append()

var balls = []; // We start with an array with just one element.
var gravity = 0.1;

function setup() {
  createCanvas(480, 240)
  // Initialize ball index 0
  balls.push(new Ball(50,0,32));
}

function draw() {
  background(51);
  
  // Update and display all balls
  for (var i = 0; i < balls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed() {
  // A new ball object
  var b = new Ball(mouseX,mouseY,32); // Make a new object at the mouse location.
  balls.push(b);
}
