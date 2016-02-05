// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 17-6: Stock Ticker 

// An array of stock objects
var stocks = [];
var totalW = 0;

function setup() {
  createCanvas(400, 200);
  textFont("Arial", 16);

  // Giving the stocks names and values to display
  stocks[0] = new Stock("ZOOG", 903);
  stocks[1] = new Stock("FOR", 55);
  stocks[2] = new Stock("ELSE", 100);
  stocks[3] = new Stock("BLAH", 100);
  stocks[4] = new Stock("OF", 100);
  stocks[5] = new Stock("PROC", 92);  

  // We space the stock quotes out according to textWidth()
  var x = 0;
  for (var i = 0; i < stocks.length; i++) {
    stocks[i].setX(x);
    x = x + (stocks[i].textW());
  }
  totalW = x;
}

function draw() {
  background(255);
  fill(0);
  
  // Move and display all quotes
  for (var i = 0; i < stocks.length; i++) {
    stocks[i].move();
    stocks[i].display();
  }
}

