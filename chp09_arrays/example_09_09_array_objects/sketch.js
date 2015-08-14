// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-9: An array of Car objects

var cars = [];

function setup() {
  createCanvas(480, 270);
  for (var i = 0; i < 100; i++) { // Initialize each Car using a for loop.
    cars[i] = new Car(color(i*2),0,i*2,i/20.0); 
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cars.length; i++) { // Run each Car using a for loop.
    cars[i].move();
    cars[i].display();
  }
}
