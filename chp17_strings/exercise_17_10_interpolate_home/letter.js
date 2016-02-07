// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

function Letter(x, y, letter) {
  // The object knows its original " home " location
  // As well as its current location
  this.homex = this.x = x;
  this.homey = this.y = y;
  this.letter = letter;
  this.theta = 0;

  // Display the letter
  this.display = function() {
    fill(0);
    textAlign(LEFT);
    // User translate and rotate to draw the letter
    push();
    translate(this.x, this.y);
    rotate(this.theta);
    text(this.letter, 0, 0);
    pop();
  }
  
  // Move the letter randomly
  this.shake = function() {
    this.x += random(-2,2);
    this.y += random(-2,2);
    this.theta += random(-0.1, 0.1);
  }
  
  // At any point, the current location can be set back to the home location by calling the home() function.
  this.home = function() { 
    this.x = lerp(this.x, this.homex, 0.05);
    this.y = lerp(this.y, this.homey, 0.05);
    this.theta = lerp(this.theta, 0, 0.05);
  }

}