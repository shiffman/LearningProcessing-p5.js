// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-1: Simple Sound Playback

// A Sample object (for a sound)
var song;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}

function setup() {
  createCanvas(480, 270);
  background(0);
  fill(255);
  textAlign(CENTER);
  text("click to play/pause", width/2, height/2);
  song.play();
  noLoop();
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}