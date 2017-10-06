// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-6: Text breaking up

class Letter {
  constructor(x, y, letter) {
    // The object knows its original " home " location
    // As well as its current location
    this.homex = this.x = x;
    this.homey = this.y = y;
    this.letter = letter;
  }

  // Display the letter
  display() {
    fill(0);
    textAlign(LEFT);
    text(this.letter, this.x, this.y);
  }

  // Move the letter randomly
  shake() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  // At any point, the current location can be set back to the home location by calling the home() function.
  home() {
    this.x = this.homex;
    this.y = this.homey;
  }
}
