// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 22-2: Polymorphism

// One array of Shapes
var shapes = new Array(30);

function setup() {
  createCanvas(480, 270);

  for (var i = 0; i < shapes.length; i++ ) {
    var r = int(random(2));
    // Randomly put either circles or squares in our array
    if (r == 0) {
      shapes[i] = new Circle(320, 180, 32, color(random(255), 100));
    } else {
      shapes[i] = new Square(320, 180, 32);
    }
  }
}

function draw() {
  background(255);
  // Jiggle and display all shapes
  for (var i = 0; i < shapes.length; i++ ) {
    shapes[i].jiggle();
    shapes[i].display();
  }
}
