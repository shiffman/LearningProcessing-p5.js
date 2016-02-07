// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-9: Loading a URL asynchronously with thread()

var timer;
var time = "";

// Let's only animate when we are waiting for the data
var loading = true;

function setup() {
  createCanvas(200, 200);
  // Execute this method asynchronously using a thread
  loadJSON('http://time.jsontest.com/', gotData);
  timer = new Timer(1000);
  timer.start();
}

function draw() {
  background(255);
  // Every 1 second, make a new request
  if (timer.isFinished()) {
    // In case you want to see the difference with stuttering
    loadJSON('http://time.jsontest.com/', gotData);
    loading = true;
    println("Making request!");
    timer.start();
  }

  fill(0);
  noStroke();
  text(time, 40, 100);

  translate(20, 100);
  stroke(0);
  // Animate only when waiting for data
  if (loading) {
    rotate(frameCount*0.04);
  }
  for (var i = 0; i < 10; i++) {
    rotate(radians(36));
    line(5, 0, 10, 0);
  }
}

// Update the String variable
function gotData(json) {
  // hack to make it take longer
  setTimeout(function() {
    time = json.time;
    loading = false;
    println("Request completed!");
  }, 500);
}
