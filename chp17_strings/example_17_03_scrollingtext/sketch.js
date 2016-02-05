// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-3: Scrolling headlines 

// An array of news headlines
var headlines = [
  "Processing downloads break downloading record.", 
  "New study shows computer programming lowers cholesterol.",
];

var x; // Horizontal location
var index = 0;

function setup() {
  createCanvas(480, 270);

  // Initialize headline offscreen
  x = width;
}

function draw() {
  background(255);
  fill(0);

  // Display headline at x location
  textFont("Arial", 16);
  textAlign(LEFT);

  // A specific String from the array is displayed according to the value of the "index" variable.
  text(headlines[index], x, height-20); 

  // Decrement x
  x = x - 3;

  // If x is less than the negative width, then it is off the screen
  // textWidth() is used to calculate the width of the current String.
  var w = textWidth(headlines[index]); 
  if (x < -w) {
    x = width;
    // index is incremented when the current String has left the screen in order to display a new String.
    index = (index + 1) % headlines.length;
  }
}

