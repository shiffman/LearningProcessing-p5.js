// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-5: Rotating text 

var message = "this text is spinning";
var theta = 0;

function setup() {
  createCanvas(480, 270);
}

function draw() {

  background(255);
  fill(0);
  textFont("Arial");                  // Set the font
  textAlign(CENTER);
  push();
  translate(width/2, height/2); // Translate to the center
  rotate(theta);                // Rotate by theta

  // The text is center aligned and displayed at (0,0) after translating and rotating. 
  // See Chapter 14 or a review of translation and rotation.
  text(message, 0, 0); 
  pop();

  // Increase rotation
  theta += 0.02;
}