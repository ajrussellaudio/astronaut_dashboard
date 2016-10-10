var ApiRequester = require("./api_request");

var Weather = function( options ) {
  this.id = options.id;
  this.main = options.main;
  this.description = options.description;
  this.icon = options.icon;
}

Weather.prototype.get = function( callback ) {
  var apiRequester = new ApiRequester();
  var url = "http://api.openweathermap.org/data/2.5/weather?q=Glasgow,gb&appid=6d9886583056cab206ab48229113614f";
  var self = this;
  apiRequester.makeRequest(url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse( jsonString );
    var weather = self.populateWeather( results );
    callback( weather );
  });
}

Weather.prototype.populateWeather = function(results) {
  var weather = new Weather(results.weather[0]);
  return weather;
}

module.exports = Weather;