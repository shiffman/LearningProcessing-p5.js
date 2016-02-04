// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 13-7:  Use the sine function to create a "breathing" shape, that is, one whose size oscillates.  

// An array of objects
var breathers = [];

function setup() {   
  createCanvas(480, 270);  
  // Initialize 25 objects
  for (var i = 0; i < 25; i++) {
    breathers[i] = new Breather();
  }
}   

function draw() {   
  background(255);  
  // Run all objects
  for (var i = 0; i < breathers.length; i++) {
    breathers[i].breath();
    breathers[i].display();
  }
}   


