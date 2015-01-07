// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 9-8: Write a Button class (see Example 5-5 
// for a non-object-oriented button). The button 
// class should register when a mouse is pressed over 
// the button and change color.  Create button objects 
// of different sizes and locations using an array. 
// Before writing the main program, sketch out the 
// Button class. Assume the button is off  when it 
// first appears.  

// An array of buttons
var buttons = new Array(6);

function setup() {
  createCanvas(600, 200);
  // A loop to evenly space out the buttons along the window
  for (var i = 0; i < buttons.length; i++) {
    buttons[i] = new Button(i*100+25, height/2-25, 50, 50);
  }
}

function draw() {
  background(175);
  // Show all the buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].display();
  }
}

function mousePressed() {
  // When the mouse is pressed, we must check every single button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click(mouseX, mouseY);
  }
}
