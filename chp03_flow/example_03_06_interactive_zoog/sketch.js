// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 3-6: Interactive Zoog?
function setup() {
  // Set the size of the window
  createCanvas(480, 270);  
  // The frame rate is set to 30 frames per second.
  frameRate(30);
}

function draw() {
  // Draw a white background
  background(255);  
  
  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER); 
  //Eliminating corner draw bug
  if(mouseX!=0 && mouseY!=0)    
  {
  // Draw Zoog's body
  stroke(0);
  fill(175);
  rect(mouseX,mouseY,20,100);

  // Draw Zoog's head
  stroke(0);
  fill(255);
  ellipse(mouseX,mouseY-30,60,60); 

  // Draw Zoog's eyes
  // The eye color is determined by the mouse location.
  fill(mouseX/2,0,mouseY/2); 
  ellipse(mouseX-19,mouseY-30,16,32); 
  ellipse(mouseX+19,mouseY-30,16,32); 

  // Draw Zoog's legs
  stroke(0);
  // The legs are drawn according to the mouse location and the previous mouse location.
  line(mouseX-10,mouseY+50,pmouseX-10,pmouseY+60);
  line(mouseX+10,mouseY+50,pmouseX+10,pmouseY+60);
}
}

function mousePressed() {
  println("Take me to your leader!"); 
}
