
function Bubble(x, y, diameter, s) {
  this.x = Number(x);
  this.y = Number(y);
  this.diameter = Number(diameter);
  this.name = s;
  this.over = false;

  // Checking if mouse is over the Bubble
  this.rollover = function(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < diameter/2) {
      this.over = true; 
    } else {
      this.over = false;
    }
  }
  
  // Display the Bubble
  this.display = function() {
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    if (this.over) {
      textAlign(CENTER);
      noStroke();
      fill(0);
      text(this.name, this.x, this.y + this.diameter/2 + 20);
    }
  }
}
