// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-8: A snake following the mouse

// Declare an array
var points = []; 

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);
  
  // New location
  var point = {
    x: mouseX,
    y: mouseY
  }
  points.push(point); // Update the last spot in the array with the mouse location.

  if (points.length > 50) {
    points.splice(0,1);
  }
  
  // Draw everything
  for (var i = 0; i < points.length; i++) {
     // Draw an ellipse for each element in the arrays. 
     // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(255-i*5);
    ellipse(points[i].x,points[i].y,i,i);
  }
}
