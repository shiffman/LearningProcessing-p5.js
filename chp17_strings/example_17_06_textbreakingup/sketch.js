// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-6: Text breaking up 

var message = "click mouse to shake it up";

// An array of Letter objects
var letters;

function setup() {
  createCanvas(480, 270);

  // Load the font
  textFont("Arial", 20);

  // Create the array the same size as the String
  letters = [];

  // Initialize Letters at the correct x location
  var x = 216;
  for (var i = 0; i < message.length; i ++ ) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    letters[i] = new Letter(x, 180, message.charAt(i)); 
    x += textWidth(message.charAt(i));
  }
}

function draw() {
  background(255);
  for (var i = 0; i < letters.length; i ++ ) {

    // Display all letters
    letters[i].display();

    // If the mouse is pressed the letters shake
    // If not, they return to their original location
    if (mouseIsPressed) {
      letters[i].shake();
    } else {
      letters[i].home();
    }
  }
}

