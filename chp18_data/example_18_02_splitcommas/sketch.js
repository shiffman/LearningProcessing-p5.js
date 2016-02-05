// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-2: Graphing comma separated numbers from a text file

var stuff, data;

function preload() {
  // The text from the file is loaded into an array. 
  stuff = loadStrings("data/data.txt");
}

function setup() { 
  createCanvas(480, 270);
  // This array has one element because the file only has one line. 
  // Convert String into an array of integers using ',' as a delimiter

  // Later we'll see how we can do this with the Table class
  data = int(split(stuff[0], ',' ));
}

function draw() {
  background(255);
  stroke(0);

  for (var i = 0; i < data.length; i++) {
    // The array of ints is used to set the color and height of each rectangle.
    fill(data[i]); 
    rect(i*64, 0, 20, data[i]);
  }
}

