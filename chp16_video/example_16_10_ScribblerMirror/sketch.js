// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-9: The scribbler

// Two global variables
var x;
var y;
var video;

function setup() {
  createCanvas(320, 240);
  background(175);
  // Start x and y in the center
  x = width/2;
  y = height/2;
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width,height);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();

}

function draw() {
  video.loadPixels();

  // A new x,y location is picked as the current (x,y) plus or minus a random value. 
  // The new location is constrained within the window's pixels.  
  var newx = constrain(x + random(-20, 20), 0, width);
  var newy = constrain(y + random(-20, 20), 0, height);
  
  var loc = (floor(newx) + floor(newy) * width) * 4;
  var r = video.pixels[loc];
  var g = video.pixels[loc + 1];
  var b = video.pixels[loc + 2];
  // Draw a line from x,y to the newx,newy
  stroke(r,g,b);
  strokeWeight(4);
  line(x, y, newx, newy);

  // We save the new location in (x,y) in order to start the process over again.
  x = newx; 
  y = newy;
}
