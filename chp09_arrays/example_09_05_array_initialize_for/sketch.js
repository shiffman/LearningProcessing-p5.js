// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-5: Using a for loop to initialize all elements of an array

var values = [];
// or
// var values = new Array(1000);

for (var n = 0; n < 1000; n ++ ) {
  values[n] = random(0,10);
  // or
  // values[n].push(random(0,10));
}
