// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-6: Oscillators and frequency

var osc;

function setup() {
  createCanvas(200, 200);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.start();
}

function draw() {
  background(200);
  
  var freq = map(mouseX, 0, width, 150, 880);
  osc.freq(freq);

  fill(175);
  stroke(0);
  ellipse(mouseX, 100, 32, 32);
}