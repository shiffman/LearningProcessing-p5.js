// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-9: An array of Car objects


// The Car class does not change whether we are making one car, 100 cars or 1,000 cars!
class Car { 
  color c;
  var xpos;
  var ypos;
  var xspeed;

  Car(color c_, var xpos_, var ypos_, var xspeed_) {
    c = c_;
    xpos = xpos_;
    ypos = ypos_;
    xspeed = xspeed_;
  }

  function display() {
    rectMode(CENTER);
    stroke(0);
    fill(c);
    rect(xpos,ypos,20,10);
  }

  function move() {
    xpos = xpos + xspeed;
    if (xpos > width) {
      xpos = 0;
    }
  }
}
