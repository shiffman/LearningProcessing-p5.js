// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-11: Resizing an array using append()

class Ball {
  var x;
  var y;
  var speed;
  var w;
  
  Ball(var tempX, var tempY, var tempW) {
    x = tempX;
    y = tempY;
    w = tempW;
    speed = 0;
  }
  
  function gravity() {
    // Add gravity to speed
    speed = speed + gravity;
  }
  
  function move() {
    // Add speed to y location
    y = y + speed;
    // If square reaches the bottom
    // Reverse speed
    if (y > height) {
      speed = speed * -0.95;
      y = height;
    }
  }
  
  function display() {
    // Display the circle
    fill(101`);
    stroke(0);
    ellipse(x,y,w,w);
  }
}  
