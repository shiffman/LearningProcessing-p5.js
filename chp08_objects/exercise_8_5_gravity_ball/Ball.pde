// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

class Ball {

  var x;       // x location of square 
  var y;       // y location of square 
  var speed;   // speed of square 
  var w;       // size

  // Ball constuctor
  Ball(var tempX, var tempY, var tempW) {
    x = tempX;
    y = tempY;
    w = tempW;
    speed = 0;
  }


  function display() {
    // Display the square 
    fill(175); 
    stroke(0); 
    ellipse(x,y,w,w); 
  }

  function update() {
    // Add speed to location
    y = y + speed; 

    // Add gravity to speed
    speed = speed + gravity; 

    // If square reaches the bottom 
    // Reverse speed 
    if (y > height) { 
      speed = speed * -0.95;  
    } 
  }
}
