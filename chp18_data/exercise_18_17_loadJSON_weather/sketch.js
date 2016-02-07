/**
 * Loading JSON Data
 * by Daniel Shiffman.  
 * 
 * This example demonstrates how to use loadJSONObject/Array()
 * to retrieve JSON data via URL
 */

// We're going to store the temperature
var temperature = 0;
// We're going to store text about the weather
var weather = "";

var json;

function preload() {
  // The URL for the JSON data (replace "imperial" with "metric" for celsius)
  var url = "http://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&APPID=e812164ca05ed9e0344b89ebe273c141";
  json = loadJSON(url);

}

function setup() {
  createCanvas(200, 200);

  // Get the temperature
  temperature = json.main.temp;

  // Grab the description, look how we can "chain" calls.
  weather = json.weather[0].description;
}

function draw() {
  background(255);
  fill(0);

  // Display all the stuff we want to display
  text("City: New York", 10, 50);
  text("Current temperature: " + temperature, 10, 70);
  text("Forecast: " + weather, 10, 90);
}

/*
{
  "coord":{
    "lon":-74.01,
    "lat":40.71
  },
  "sys":{
    "message":0.2012,
    "country":"US",
    "sunrise":1406540974,
    "sunset":1406592927
  },
  "weather":[
    {
      "id":801,
      "main":"Clouds",
      "description":"few clouds",
      "icon":"02d"
    }
  ],
  "base":"cmc stations",
  "main":{
    "temp":73.45,
    "humidity":83,
    "pressure":999,
    "temp_min":70,
    "temp_max":75.99
  },
  "wind":{
    "speed":4.45,
    "gust":3.6,
    "deg":259
  },
  "rain":{
    "3h":0
  },
  "clouds":{
    "all":24
  },
  "dt":1406559145,
  "id":5128581,
  "name":"New York",
  "cod":200
}
*/
