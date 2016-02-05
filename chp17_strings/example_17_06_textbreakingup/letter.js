// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-6: Text breaking up 

function Letter(x, y, letter) {
  // The object knows its original " home " location
  // As well as its current location
  this.homex = this.x = x;
  this.homey = this.y = y;
  this.letter = letter;

  // Display the letter
  this.display = function() {
    fill(0);
    textAlign(LEFT);
    text(this.letter, this.x, this.y);
  }
  
  // Move the letter randomly
  this.shake = function() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
  
  // At any point, the current location can be set back to the home location by calling the home() function.
  this.home = function() { 
    this.x = this.homex;
    this.y = this.homey;
  }
}
