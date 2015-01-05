class Bubble {

  var x;
  var y;
  var diameter;

  Bubble(var tempD) {
    x = width/2;
    y = height;
    diameter = tempD;
  }

  function ascend() {
    y--;
    x = x + random(-2,2);
  }

  function display() {
    stroke(0);
    fill(127);
    ellipse(x, y, diameter, diameter);
  }

  function top() {
    if (y < diameter/2) {
      y = diameter/2;
    }
  }
}

