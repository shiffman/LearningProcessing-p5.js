// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 8-5: Rewrite the gravity example from Chapter 5 using objects with a Ball class.
// Include two instances of a Ball object.

// Ball class
class Ball {
  // Ball constuctor
  constructor(tempX, tempY, tempW) {
    this.x = tempX;  // x location of ball
    this.y = tempY;  // y location of ball
    this.w = tempW;  // speed of square
    this.speed = 0;  // size
  }

  display() {
    // Display the ball
    fill(255,100);
    stroke(0);
    ellipse(this.x,this.y,this.w,this.w);
  }

  update() {
    // Add speed to location
    this.y = this.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;

    // If square reaches the bottom
    // Reverse speed
    if (this.y > height) {
      this.y = height;
      this.speed = this.speed * -0.95;
    }
  }
}
