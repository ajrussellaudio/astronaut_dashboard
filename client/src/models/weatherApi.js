var WeatherApi = function() {


};

WeatherApi.prototype.get = function(callback) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=Glasgow,gb&appid=6d9886583056cab206ab48229113614f";
  var self = this;
  this.makeRequest(url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse(jsonString);
    var weather = self.populateWeather(results);
  });
}

WeatherApi.prototype.populateWeather = function(results) {
  var weather = new Weather(results.weather[0]);
  console.log( weather );
}

WeatherApi.prototype.makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

module.exports = WeatherApi;