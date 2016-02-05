// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-1: User input

// Variable to store text currently being typed
var typing = "";

// Variable to store saved text when return is hit
var saved = "";

function setup() {
  createCanvas(480, 270);
  textFont("Arial", 16);
}

function draw() {
  background(255);

  var indent = 25;
  
  // Set the font and fill for text
  fill(0);
  
  // Display everything
  text("Click in this window and type. \nHit enter to save. ", indent, 40);
  text("Input: " + typing, indent, 190);
  text("Saved text: " + saved, indent, 230);
}

function keyPressed() {
  // If the return key is pressed, save the String and clear it
  if (keyCode == 13) {
    saved = typing;
    // A String can be cleared by setting it equal to ""
    typing = ""; 
  } else {
    // Otherwise, concatenate the String
    // Each character typed by the user is added to the end of the String variable.
    typing = typing + key; 
  }
}
