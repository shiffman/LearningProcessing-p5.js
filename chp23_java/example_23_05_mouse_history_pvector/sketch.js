// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-5: A snake following the mouse
// Using an ArrayList of PVector objects

// Declare an ArrayList of PVector objects
var pointHistory = [];

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255);

  // New mouse position
  var mouse = createVector(mouseX, mouseY);
  pointHistory.push(mouse);

  // Remove old ones
  if (pointHistory.length > 50) {
    pointHistory.splice(0, 1);
  }

  // Draw everything
  for (var i = 0; i < pointHistory.length; i++) {
    // Draw an ellipse for each element in the ArrayList. 
    // Color and size are tied to the loop's counter: i.
    noStroke();
    fill(255 - i*5);
    // Grab the current PVector
    var position = pointHistory[i];
    // Look at the x and y of each PVector
    ellipse(position.x, position.y, i, i);
  }
}

