// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-4: Display QuickTime movie

import processing.video.*;

// Step 1. Declare Movie object
Movie movie; 

function setup() {
  createCanvas(320, 240);

  // Step 2. Initialize Movie object
  // Movie file should be in data folder
  movie = new Movie(this, "cat.mov"); 

  // Step 3. Start movie playing
  movie.loop();
}

// Step 4. Read new frames from movie
function movieEvent(Movie movie) {
  movie.read();
}

function draw() {
  // Step 5. Display movie.
  image(movie, 0, 0);
}

