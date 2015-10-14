// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 14-18: Object-oriented solar system

// An array of 8 planet objects
var planets = new Array(8);

function setup() {
  createCanvas(480, 270);
  
  // The planet objects are initialized using the counter variable
  for (var i = 0; i < planets.length; i++ ) {
    planets[i] = new Planet(64 + i*32,24);
  }
}

function draw() {
  background(255);
  
  // Drawing the Sun
  push();
  translate(width/2,height/2);
  stroke(0);
  fill(255);
  ellipse(0,0,64,64);
  
  // Drawing all Planets
  for (var i = 0; i < planets.length; i++ ) {
    planets[i].update();
    planets[i].display();
  }
  pop();
}
