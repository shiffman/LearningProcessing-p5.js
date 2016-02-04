// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 13-9: Two-dimensional array

// Set up dimensions
function setup() {
  createCanvas(200, 200);
  var cols = width;
  var rows = height;

  // Declare 2D array
  var myArray = [];

  // Initialize 2D array values
  for (var i = 0; i < cols; i ++ ) {
    myArray[i] = [];
    for (var j = 0; j < rows; j ++ ) {
      myArray[i][j] = int(random(255));
    }
  }

  // Draw points
  for (var i = 0; i < cols; i ++ ) {
    for (var j = 0; j < rows; j ++ ) {
      stroke(myArray[i][j]);
      point(i, j);
    }
  }
}
