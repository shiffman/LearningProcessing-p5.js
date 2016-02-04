// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 13-6: Encapsulate Example 13-6 into an Oscillator object. Create an array 
// of Oscillators, each moving at diff erent rates along the x and y axes. Here is some code for the 
// Oscillator class to help you get started.  

// An array of objects
var oscillators = [];

function setup()  {   
  createCanvas(480, 270);  
  // Initialize 10 objects
  for (var i = 0; i < 10; i++) {
    oscillators[i] = new Oscillator();
  }
}   

function draw() {   
  background(255);  
  // Run all objects
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}   



