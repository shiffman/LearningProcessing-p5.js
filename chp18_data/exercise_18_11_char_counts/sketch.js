// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Count the number of times each letter of the alphabet appears in King Lear
// Visualize those counts. Here is one possibility (you should be more creative). 
// Note this sketch will require the use of the  charAt() function.  


var all;
var letterCounts = [];
var maxCount = 0;

var rawtext;

function preload() {
  rawtext = loadStrings('data/kinglear.txt');
}

function setup() {
  createCanvas(390, 200);
  // Load the font
  textFont("Georgia", 16);
  // Load King Lear into an array of strings
  all = join(rawtext," ");
  // Convert everything to lower case 
  all = all.toLowerCase();

  for (var i = 0; i < 26; i++) {
    letterCounts[i] = 0;
  }


  for (var i = 0; i < all.length; i++) {
    // Look at every character
    var c = all.charCodeAt(i);
    // Is it a-z?
    if (c > 96 && c < 123) {
      // Subtract 97 (ASCII code for 'a')
      // This maps the characters to a range of 0-25
      var index = c - 97;
      // Use that index to increase the count
      letterCounts[index]++;
    } 
  }

  // Find the highest letter count
  // We'll use this in order to normalize the values
  // for the bar graph
  for (var i = 0; i < letterCounts.length; i++) {
    if (letterCounts[i] > maxCount) {
      maxCount = letterCounts[i];
    }
  }
}

function draw() {
  background(255);
  fill(0);
  
  // Draw a bar graph
  for (var x = 0; x < letterCounts.length; x++) {
    // Height according to count
    var h = 180*(letterCounts[x] / maxCount);
    stroke(0);
    strokeWeight(1);
    fill(175);
    rect(x*15,height-h,15,h); 
    fill(0);
    noStroke();
    textAlign(CENTER);
    text((char)(x+97),x*15+15/2.0,height-h-5);
  }
}
