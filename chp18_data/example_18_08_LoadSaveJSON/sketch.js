/**
 * Loading JSON Data
 * by Daniel Shiffman.  
 * 
 * This example demonstrates how to use loadJSON()
 * to retrieve data from a JSON file and make objects 
 * from that data.
 *
 * Here is what the JSON looks like (partial):
 *
 {
 "bubbles": [
 {
 "position": {
 "x": 160,
 "y": 103
 },
 "diameter": 43.19838,
 "label": "Happy"
 },
 {
 "position": {
 "x": 372,
 "y": 137
 },
 "diameter": 52.42526,
 "label": "Sad"
 }
 ]
 }
 */

// An Array of Bubble objects
var bubbles;
// json data
var json;

function preload() {
  json = loadJSON("data/data.json");
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
  for (var i = 0; i < json.bubbles.length; i++) {
    var bubble = json.bubbles[i];
    // Make a Bubble object out of the data read
    bubbles[i] = new Bubble(bubble.position.x, bubble.position.y, bubble.diameter, bubble.label);
  }
}





//  function mousePressed() {
//   // Create a new JSON bubble object
//   JSONObject newBubble = new JSONObject();

//   // Create a new JSON position object
//   JSONObject position = new JSONObject();
//   position.setInt("x", mouseX);
//   position.setInt("y", mouseY);

//   // Add position to bubble
//   newBubble.setJSONObject("position", position);

//   // Add diamater and label to bubble
//   newBubble.setFloat("diameter", random(40, 80));
//   newBubble.setString("label", "New label");

//   // Append the new JSON bubble object to the array
//   JSONArray bubbleData = json.getJSONArray("bubbles");
//   bubbleData.append(newBubble);

//   if (bubbleData.createCanvas() > 10) {
//     bubbleData.remove(0);
//   }

//   // Save new data
//   saveJSONObject(json,"data/data.json");
//   loadData();
// }
