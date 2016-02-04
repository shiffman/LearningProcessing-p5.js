// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-5: Object-oriented timer

var timer;

function setup() {
  createCanvas(200, 200);
  background(0);
  timer = new Timer(5000);
  timer.start();
}

function draw() {
  if (timer.isFinished()) {
    background(random(255));
    timer.start();
  }
}

