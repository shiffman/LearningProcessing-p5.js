// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-2: Image "sprite"

var head;  // A variable for the image file
var x,y;   // Variables for image location
var rot;   // A variable for image rotation

function preload() {
  // Load image, initialize variables
  head = loadImage("data/face.jpg");
}

function setup() {
  createCanvas(200,200);
  
  x = 0.0;
  y = width/2.0;
  rot = 0.0;
}

function draw() {
  background(255);
  
  // Translate and rotate
  translate(x,y);
  rotate(rot);
  
  // Images can be animated just like regular shapes using variables, translate(), rotate(), and so on.
  imageMode(CENTER);
  image(head,0,0); 
  
  // Adjust variables for animation
  x += 1.0;
  rot += 0.02;
  if (x > width + head.width) {
    x = -head.width;
  }
}
