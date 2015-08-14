// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 5-5: Write a program that implements a simple 
// rollover. In other words, if the mouse is over a 
// rectangle, the rectangle changes color. 

var x = 50;
var y = 50;
var w = 100;
var h = 75;

function setup() {
  createCanvas(200,200);
}

function draw() {
  background(255);
  stroke(0);
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    fill(0);
  } else {
    fill(175);
  }
  rect(x,y,w,h);
}
