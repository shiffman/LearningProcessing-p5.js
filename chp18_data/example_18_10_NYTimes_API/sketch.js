/**
 * Loading JSON Data
 * by Daniel Shiffman.  
 * 
 * to retrieve JSON data via URL
 */

var json;

// The URL for the JSON data
var apiKey = "f14a0458327ed8b8e48c3068f5600307:16:34791265";
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
var query = "?q=processing&sort=newest";

function preload() {
  json = loadJSON(url+query+"&api-key="+apiKey);
}

function setup() {
  createCanvas(200, 200);

  // Load the XML document
  var headline = json.response.docs[0].headline.main;
  background(255);
  fill(0);
  text(headline, 10, 10, 180, 190);
}
