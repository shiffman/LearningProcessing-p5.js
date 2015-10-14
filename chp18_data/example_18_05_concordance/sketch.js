// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 18-6: Analyzing Text

var allwords;    // The array to hold all of the text

// We will use spaces and punctuation as delimiters
var delimiters = " ,.?!;:\n";

var concordance;

var rawtext;

function preload() {
  // Load A Midsummer Night's Dream into an array of strings
  rawtext = loadStrings("data/pg1514.txt");
}

function setup() {
  createCanvas(360, 640);


  // Join the big array together as one long string
  var everything = join(rawtext, "\n");

  // All the lines in King Lear are first joined as one big String and then split up into an array of individual words. 
  // Note the use of splitTokens() since we are using spaces and punctuation marks all as delimiters.  
  allwords = splitTokens(everything, delimiters);

  // Make a new empty dictionary
  concordance = createNumberDict();

  for (var i = 0; i < allwords.length; i++) {
    var s = allwords[i].toLowerCase();
    //console.log(s);
    concordance.increment(s);
  }

  // Sort so that words that appear most often are first
  concordance.sortValuesReverse();

  console.log(concordance);
}

function draw() {
  background(0);

  // Display the text and total times the word appears
  var h = 20;
  var keys = concordance.keyArray();

  for (var i = 0; i < height/h; i++) {
    var word = keys[i];
    var count = concordance.get(word);

    noStroke();
    fill(255);
    rect(0, i*20, count/4, h-4);
    fill(255);
    text(word + ": " + count, 10+count/4, i*h+h/2);
  }
  noLoop();
}

