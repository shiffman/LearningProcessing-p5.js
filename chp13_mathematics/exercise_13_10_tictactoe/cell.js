// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 13-10: Develop the beginnings of a Tic-Tac-Toe game. Create a Cell object that 
// can exist in one of two states: "O" or nothing. When you click on the cell, its state changes from 
// nothing to  "O". Here is a framework to get you started.

// A Cell constructor  
function Cell(tempX, tempY, tempW, tempH)  {   
  this.x = tempX;
  this.y = tempY;
  this.w = tempW;
  this.h = tempH;
  this.state = int(random(3)); 

  this.click = function(mx, my)  {   
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h) {
      this.state = (this.state + 1) % 3; 
    }    
  }   

  this.display = function()  {   
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.h);
    
    var b = 8;
    
    if (this.state == 0) {
      // nothing
    } else if (this.state == 1) {
      // Draw an O
      ellipse(this.x+this.w/2, this.y+this.h/2, this.w-b, this.h-b);
    } else if (this.state == 2) {
      // Draw an X
      line(this.x+b,   this.y+b, this.x+this.w-b, this.y+this.h-b);
      line(this.x+this.w-b, this.y+b, this.x+b,   this.y+this.h-b); 
    }
  }

}   

