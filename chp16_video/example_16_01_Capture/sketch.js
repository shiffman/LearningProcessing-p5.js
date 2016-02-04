// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-1: Display video

var video;

function setup() {
  createCanvas(320, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  // The above function actually makes a separate video
  // element on the page.  The line below hides it since we are
  // drawing the video to the canvas
  video.hide();
}

function draw() {
  background(0);
  // Step 5. Display the video image.
  image(video, 0, 0, width, height);
}

