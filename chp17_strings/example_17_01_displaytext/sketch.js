// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-1: Simple displaying text

function setup() {
  createCanvas(640, 480);

} 

function draw() {
  background(255);
  textFont("Arial", 16); // Step 4: Specify font to be used
  fill(0);         // Step 5: Specify font color

  // Step 6: Display Text
  text("Mmmmm ... Strings ...", 10, height/2);
}

