// A Cell object

// A cell object knows about its location in the grid
// as well as its size with the variables x, y, w, h.
// Cell Constructor
class Cell {
  constructor(tempX, tempY, tempW, tempH, tempAngle) {
    this.x = tempX;  // x,y location
    this.y = tempY;
    this.w = tempW;  // width and height
    this.h = tempH;
    this.angle = tempAngle; // angle for oscillating brightness
  }

  // Oscillation means increase angle
  oscillate() {
    this.angle += 0.02;
  }

  display() {
    stroke(255);
    // Color calculated using sine wave
    var bright = map(sin(this.angle), -1, 1, 0, 255);
    fill(bright);
    rect(this.x, this.y, this.w, this.h);
  }
}
