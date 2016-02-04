// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 13-6: Encapsulate Example 13-6 into an Oscillator object. Create an array 
// of Oscillators, each moving at diff erent rates along the x and y axes. Here is some code for the 
// Oscillator class to help you get started.  

this.Oscillator = function()  {   
  // Two angles
  this.xtheta = 0;  
  this.ytheta = 0;  
  // Increment value for both angles  
  this.dxtheta = random(-0.03, 0.03);
  this.dytheta = random(-0.03, 0.03);

  this.oscillate = function()  {
    // Increment angles   
    this.xtheta += this.dxtheta;
    this.ytheta += this.dytheta;
  }   

  this.display = function()  {   
    // Map results of sine / cosine to width and height of window
    var x = (sin(this.xtheta) + 1) * width/2;   
    var y = (cos(this.ytheta) + 1) * height/2;
    stroke(0);
    fill(175, 100);
    // draw circle and line
    line(width/2, height/2, x, y);  
    ellipse(x, y, 64, 64);  
  }
}   



