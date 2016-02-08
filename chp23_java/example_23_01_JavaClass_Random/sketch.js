// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-1: Using java.util.Random instead of random()


function setup() {
  createCanvas(480, 270);
  // Declaring a Random object and calling the constructor as found at:
  // http://docs.oracle.com/javase/8/docs/api/java/util/Random.html
  frameRate(5);
}

function draw() {

  // Calling a function found at:
  // http://docs.oracle.com/javase/8/docs/api/java/util/Random.html
  var r = random(1);
  var trueorfalse = (r < 0.5); 
  if (trueorfalse) {
    background(0);
  } else {
    background(255);
  }
}
