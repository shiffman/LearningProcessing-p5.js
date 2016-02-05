// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 17-6: Stock Ticker 

// A class to describe a stock quote
  
  function Stock(n, v) {
    this.name = n;
    this.val = v;
    // Concatenate the name, value and some spaces
    this.displayTxt = this.name + " " + this.val + "   ";
  
  
  // A function to set x position
  this.setX = function(x_) {
    this.x = x_;
  }
  
  // Scroll the quote and reset it when it gets far enough offscreen
  this.move = function() {
    this.x = this.x - 1;
    if (this.x < width - totalW) {
      this.x = width;
    } 
  }

  // Display the quote
  this.display = function() {
    textAlign(LEFT);
    fill(0);
    noStroke();
    text(this.displayTxt, this.x, height-10); 
  }
  
  // Return the width of the quote
  this.textW = function() {
    return textWidth(this.displayTxt); 
  }
}

