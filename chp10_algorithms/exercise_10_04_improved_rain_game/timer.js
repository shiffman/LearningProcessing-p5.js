// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 10-4: The raindrop catching game


class Timer {
  constructor(tempTotalTime) {
    this.savedTime = 0;        // When Timer starts
    this.totalTime = tempTotalTime; // How long Timer should last
  }

  // Starting the timer
  start() {
    // When the timer starts it stores the current time in milliseconds.
    this.savedTime = millis();
  }

  setTime(t) {
    this.totalTime = t;
  }

  // The function isFinished() returns true if 5,000 ms have passed.
  // The work of the timer is farmed out to this method.
  isFinished() {
    // Check how much time has passed
    var passedTime = millis() - this.savedTime;
    if (passedTime > this.totalTime) {
      return true;
    } else {
      return false;
    }
  }
}
