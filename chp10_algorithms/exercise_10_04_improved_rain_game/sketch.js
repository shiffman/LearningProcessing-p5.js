// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 10-4: The raindrop catching game

var catcher;    // One catcher object
var timer;        // One timer object
var drops;       // An array of drop objects
var totalDrops = 0; // totalDrops

// A boolean to let us know if the game is over
var gameOver = false;

// Variables to keep track of score, level, lives left
var score = 0;      // User's score
var level = 1;      // What level are we on
var lives = 10;     // 10 lives per level (10 raindrops can hit the bottom)
var levelCounter = 0;

function setup() {
  createCanvas(480, 270);
  catcher = new Catcher(32); // Create the catcher with a radius of 32
  drops = new Array(50);     // Create 50 spots in the array (each level now just has 25 drops)
  timer = new Timer(300);    // Create a timer that goes off every 300 milliseconds
  timer.start();             // Starting the timer
}

function draw() {
  background(255);

  // If the game is over
  if (gameOver) {
    textSize(48);
    textAlign(CENTER);
    fill(0);
    text("GAME OVER", width/2, height/2);
  } else {

    // Set catcher location
    catcher.setLocation(mouseX, mouseY); 
    // Display the catcher
    catcher.display(); 

    // Check the timer
    if (timer.isFinished()) {
      // Deal with raindrops
      // Initialize one drop
      if (totalDrops < drops.length) {
        drops[totalDrops] = new Drop();
        // Increment totalDrops
        totalDrops++;
      }
      timer.start();
    }

    // Move and display all drops
    for (var i = 0; i < totalDrops; i++ ) {
      if (!drops[i].isFinished) {
        drops[i].move();
        drops[i].display();
        if (drops[i].reachedBottom()) {
          levelCounter++;
          drops[i].finished(); 
          // If the drop reaches the bottom a live is lost
          lives--;
          // If lives reach 0 the game is over
          if (lives <= 0) {
            gameOver = true;
          }
        } 

        // Everytime you catch a drop, the score goes up
        if (catcher.intersect(drops[i])) {
          drops[i].finished();
          levelCounter++;
          score++;
        }
      }
    }


    // If all the drops are done, that leve is over!
    if (levelCounter >= drops.length) {
      // Go up a level
      level++;
      // Reset all game elements
      levelCounter = 0;
      lives = 10;
      timer.setTime(constrain(300-level*25, 0, 300));
      totalDrops = 0;
    }

    // Display number of lives left
    textFont(14);
    fill(0);
    text("Lives left: " + lives, 10, 20);
    rect(10, 24, lives*10, 10);

    text("Level: " + level, 300, 20);
    text("Score: " + score, 300, 40);
  }
}





