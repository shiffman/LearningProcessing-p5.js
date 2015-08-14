// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 6-2b: Rewrite Exercise 6-1b using a for loop.

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(255);
  for (var w = width; w > 0; w -= 20) {
    stroke(0);
    fill(w);
    ellipse(width/2, height/2, w, w);
  }
}
