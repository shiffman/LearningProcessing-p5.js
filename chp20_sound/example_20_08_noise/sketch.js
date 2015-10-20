// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-8: Noise

var noise;

function setup() {
  createCanvas(200, 200);
  noise = new p5.Noise();
  noise.setType('white');
  noise.start();
}

function draw() {
  background(200);
  
  var vol = map(mouseX, 0, width, 0, 1);
  noise.amp(vol);
  fill(175);
  stroke(0);
  ellipse(mouseX, 100, 32, 32);
}
