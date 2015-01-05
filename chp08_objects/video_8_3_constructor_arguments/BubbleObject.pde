Bubble b1;
Bubble b2;

function setup() {
  createCanvas(640, 360);
  b1 = new Bubble(64);
  b2 = new Bubble(16);
}

function draw() {
  background(255);
  b1.ascend();
  b1.display();
  b1.top();

  b2.ascend();
  b2.display();
  b2.top();
}

