// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 9-8: Write a Button class (see Example 5-5 for a non-object-oriented button). The button 
// class should register when a mouse is pressed over the button and change color.  Create button objects 
// of different sizes and locations using an array. Before writing the main program, sketch out the 
// Button class. Assume the button is off  when it first appears.  

// Constructor initializes all variables
function Button(tempX, tempY, tempW, tempH)  {    
  // Button location and size
  this.x  = tempX;   
  this.y  = tempY;   
  this.w  = tempW;   
  this.h  = tempH;   
  // Is the button on or off?
  // Button always starts as off
  this.on = false;    

  this.click = function(mx, my) {
    // Check to see if a point is inside the rectangle
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.on = !this.on;
    }
  }

  // Draw the rectangle
  this.display = function() {
    rectMode(CORNER);
    stroke(0);
    // The color changes based on the state of the button
    if (this.on) {
      fill(175);
    } else {
      fill(0);
    }
    rect(this.x,this.y,this.w,this.h);
  } 
} 
