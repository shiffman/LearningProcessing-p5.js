// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-5: Parsing IMDB manually

var name = "Mary Poppins";
var runningtime;
var poster;

var lines;

function preload() {
  lines = loadStrings('data/poppins.html');
}

function setup() {
  createCanvas(300, 350);
  loadData();
}

function draw() {
  background(255);

  // Display all the stuff we want to display
  image(poster, 10, 10, 164, 250);
  fill(0);
  text(name, 10, 300);
  text(runningtime, 10, 320);
}

// Grab the data from IMDB
function loadData() {
  // Get the raw HTML source into an array of strings
  // (each line is one element in the array)

  // Turn array into one long String
  var html = join(lines, ""); 

  // Searching for running time
  var start = "<time itemprop=\"duration\" datetime=\"PT139M\">";
  var end = "</time>";
  runningtime = giveMeTextBetween(html, start, end).trim();

  // Searching for poster image
  start = "<link rel='image_src' href=\"";
  end = "\">";
  var imgUrl = giveMeTextBetween(html, start, end);
  poster = loadImage(imgUrl);
}

// A function that returns a substring between two substrings
function giveMeTextBetween(s, before, after) {
  var found = "";
  var start = s.indexOf(before);     // Find the index of the beginning tag
  if (start == -1) {
    return "";   // If we don't find anything, send back a blank String
  }    
  start += before.length;          // Move to the end of the beginning tag
  var end = s.indexOf(after, start); // Find the index of the end tag
  if (end == -1) {
    return "";          // If we don't find the end tag, send back a blank String
  }
  return s.substring(start, end);    // Return the text in between
}