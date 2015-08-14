// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-6: An array operation

var values = [];

for (var i = 0; i < 1000; i++) {
  values[i] = random(0,10);
}

for (var i = 0; i < 1000; i++) {
  values[i] = values[i] * 2;
}
