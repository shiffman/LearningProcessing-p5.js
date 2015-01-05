// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-10: Interactive stripes

class Stripe {
  
  var x;     // horizontal location of stripe
  var speed; // speed of stripe
  var w;     // width of stripe
  
  // A boolean variable keeps track of the object's state.
  boolean mouse; // state of stripe (mouse is over or not?)

  Stripe() {
    // All stripes start at 0
    x = 0; 
    // All stripes have a random positive speed
    speed = random(1); 
    w = random(10,30);
    mouse = false;
  }

  // Draw stripe
  function display() {
    
    // Boolean variable determines Stripe color.
    if (mouse) { 
      fill(255);
    } else {
      fill(255,100);
    }
    
    noStroke();
    rect(x,0,w,height);
  }

  // Move stripe
  function move() {
    x += speed;
    if (x > width + 20) x = -20;
  }

// Check to see if povar (mx,my) is inside the Stripe.
  function rollover(var mx, var my) { 
    // Left edge is x, Right edge is x + w
    if (mx > x && mx < x + w) {
      mouse = true;
    } else {
      mouse = false;
    }
  }
}
