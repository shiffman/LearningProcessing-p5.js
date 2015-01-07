// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 9-7: Snake Class

// The constructor determines the length of the snake
function Snake(n) {
    // points array
    this.points = [];
    // how many points should we track?
    this.maxPoints = n;

  this.update = function(newX, newY) {
    // New location
    var point = {
      x: newX,
      y: newY
    }
    this.points.push(point); // Update the last spot in the array with the mouse location.

    if (this.points.length > 50) {
      this.points.splice(0,1);
    }
  }

  this.display = function() {
    // Draw everything
    for (var i = 0; i < this.points.length; i++) {
      // Draw an ellipse for each element in the arrays. 
      // Color and size are tied to the loop's counter: i.
      stroke(0);
      fill(255-i*5);
      ellipse(this.points[i].x,this.points[i].y,i,i); 
    }
  }
}
