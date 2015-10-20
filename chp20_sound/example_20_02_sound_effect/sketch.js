// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-2: Simple Sound Playback

// A sound file object
var dingdong;

// A doorbell object (that will trigger the sound)
var doorbell;

function preload() {
  // Load the sound file
  dingdong = loadSound("sounds/doorbell.mp3");  
}

function setup() {
  createCanvas(200, 200);

  // Create a new doorbell
  doorbell = new Doorbell(width/2, height/2, 64);
}

function draw() {
  background(200);
  // Show the doorbell
  doorbell.display(mouseX, mouseY);
}

function mousePressed() {
  // If the user clicks on the doorbell, play the sound!
  if (doorbell.contains(mouseX, mouseY)) {
    dingdong.play();
  }
}