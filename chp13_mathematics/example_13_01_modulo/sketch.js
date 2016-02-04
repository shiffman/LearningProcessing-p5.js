// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-1: Modulo

// 4 random numbers
var randoms = [];
// Which number are we using
var index = 0; 

function setup() {
  createCanvas(200, 200);

  // Fill array with random values
  for (var i = 0; i < 4; i++) {
    randoms[i] = random(0, 256);
  }

  frameRate(1);
}

function draw() {

  // Every frame we access one element of the array
  background(randoms[index]);

  // And then go on to the next one
  index = (index + 1) % randoms.length; // Using the modulo operator to cycle a counter back to 0.
}