// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 10-8: Fancier looking raindrop

function setup() {
  createCanvas(480, 270);
  background(255);

  for (var i = 2; i < 8; i++ ) {
    noStroke();
    fill(0);
    ellipse(width/2, height/2 + i*4, i*2, i*2);
  }

}