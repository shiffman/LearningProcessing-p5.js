// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 15-5: Setting pixels

function setup() {
  createCanvas(200, 200);

  // Before we deal with pixels
  loadPixels();

  // Loop through every pixel
  // We can get the length of the pixels array just like with any array.
  for (var i = 0; i < pixels.length; i++ ) { 

    // Pick a random number, 0 to 255
    var rand = random(255);

    // Set each element of the array to a random value
    // We can access individual elements of the pixels array via an index, just like with any other array.  
    pixels[i] = rand; 
  }

  // When we are finished dealing with pixels
  updatePixels();
}
