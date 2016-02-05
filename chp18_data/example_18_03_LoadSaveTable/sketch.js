/**
 * Loading Tabular Data
 * by Daniel Shiffman.  
 * 
 * This example demonstrates how to use loadTable()
 * to retrieve data from a CSV file and make objects 
 * from that data.
 *
 * Here is what the CSV looks like:
 *
 x,y,diameter,name
 160,103,43.19838,Happy
 372,137,52.42526,Sad
 273,235,61.14072,Joyous
 121,179,44.758068,Melancholy
 */

// An Array of Bubble objects
var bubbles;
// A Table object
var table;

function preload() {
  table = loadTable("data/data.csv", "header");
}

function setup() {
  createCanvas(480, 270);
  loadData();
}

function draw() {
  background(255);
  // Display all bubbles
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }

}

function loadData() {
  // Load CSV file into a Table object
  // "header" option indicates the file has a header row

  // The size of the array of Bubble objects is determined by the total number of rows in the CSV
  bubbles = []; 

  // You can access iterate over all the rows in a table
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    // You can access the fields via their column name (or index)
    var x = row.get("x");
    var y = row.get("y");
    var d = row.get("diameter");
    var n = row.get("name");
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(x, y, d, n);
  }
}

// function mousePressed() {
//   // Create a new row
//   TableRow row = table.addRow();
//   // Set the values of that row
//   row.setFloat("x", mouseX);
//   row.setFloat("y", mouseY);
//   row.setFloat("diameter", random(40, 80));
//   row.setString("name", "Blah");

//   // If the table has more than 10 rows
//   if (table.getRowCount() > 10) {
//     // Delete the oldest row
//     table.removeRow(0);
//   }

//   // Writing the CSV back to the same file
//   saveTable(table, "data/data.csv");
//   // And reloading it
//   loadData();
// }

