// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-7: Loading a URL asynchronously

// Timer Class from Chapter 10

function Timer(tempTotalTime) {
  this.savedTime = 0;        // When Timer starts
  this.totalTime = tempTotalTime; // How long Timer should last

  // Starting the timer
  this.start = function() {
    // When the timer starts it stores the current time in milliseconds.
    this.savedTime = millis();
  }

  // The function isFinished() returns true if 5,000 ms have passed. 
  // The work of the timer is farmed out to this method.
  this.isFinished = function() { 
    // Check how much time has passed
    var passedTime = millis() - this.savedTime;
    if (passedTime > this.totalTime) {
      return true;
    } else {
      return false;
    }
  }
}


