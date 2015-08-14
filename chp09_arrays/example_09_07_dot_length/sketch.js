// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-7: An array operation using dot length

var values = new Array(1000);

for (var i = 0; i < values.length; i++) {
  values[i] = random(0,10);
}

for (var i = 0; i < values.length; i++) {
  values[i] = 0;
}  
