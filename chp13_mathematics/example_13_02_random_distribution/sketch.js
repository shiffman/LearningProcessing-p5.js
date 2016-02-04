// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-2: Random number distribution

// An array to keep track of how often random numbers are picked.
var randomCounts;

function setup() {
  createCanvas(480, 270);
  randomCounts = new Array(floor(width/20));
  for (var x = 0; x < randomCounts.length; x++) {
    randomCounts[x] = 0;
  }
}

function draw() {
  background(255);

  // Pick a random number and increase the count
  var index = int(random(randomCounts.length));
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0);
  fill(175);
  for (var x = 0; x < randomCounts.length; x++) {
    rect(x * 20, 0, 19, randomCounts[x]);
  }
}

