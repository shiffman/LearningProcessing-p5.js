// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 13-10: Develop the beginnings of a Tic-Tac-Toe game. Create a Cell object that 
// can exist in one of two states: "O" or nothing. When you click on the cell, its state changes from 
// nothing to "O". Here is a framework to get you started.

var board;  

var cols = 3;  
var rows = 3;  

function setup() {   
  createCanvas(300, 300);

  var w = width / cols;
  var h = height / rows;

  board = [];
  for (var i = 0; i < cols; i++) {
    board[i] = [];
    for (var j = 0; j < rows; j++) {
      board[i][j] = new Cell(i * w, j * h, w, h);
    }
  }
}   

function draw() {   
  background(255);  
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      board[i][j].display();
    }
  }
}   

function mousePressed() {   
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      board[i][j].click(mouseX, mouseY);
    }
  }
}   




