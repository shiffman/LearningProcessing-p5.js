// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from Chapter 5 using objects with a Ball class. 
// Include two instances of a Ball object.

  // Ball constuctor
function Ball(tempX, tempY, tempW) {
  this.x = tempX;  // x location of square 
  this.y = tempY;  // y location of square 
  this.w = tempW;  // speed of square 
  this.speed = 0;  // size

  this.display = function() {
    // Display the square 
    fill(175); 
    stroke(0); 
    ellipse(this.x,this.y,this.w,this.w); 
  }

  this.update = function() {
    // Add speed to location
    this.y = this.y + this.speed; 

    // Add gravity to speed
    this.speed = this.speed + gravity; 

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height) { 
      this.speed = this.speed * -0.95;  
    } 
  }
}
