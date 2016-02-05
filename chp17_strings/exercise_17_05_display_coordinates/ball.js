
function Ball(x, y, xspeed, yspeed) {
  this.x = x;
  this.y = y;
  this.xspeed = xspeed;
  this.yspeed = yspeed;

  this.move = function() {
    // Add the current speed to the location.
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    // Remember, || means "or."
    if ((this.x > width) || (this.x < 0)) {
      // If the object reaches either edge, multiply speed by -1 to turn it around.
      this.xspeed = this.xspeed * -1;
    }
    
        // Remember, || means "or."
    if ((this.y > height) || (this.y < 0)) {
      // If the object reaches either edge, multiply speed by -1 to turn it around.
      this.yspeed = this.yspeed * -1;
    }
  }
  
  this.display = function() {
    // Display circle at x location
    stroke(0);
    fill(175);
    ellipse(this.x, this.y, 32, 32);
    fill(0);
    noStroke();
    text(this.x + "," + this.y, this.x+18, this.y);
  }
}





