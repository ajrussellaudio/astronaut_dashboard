var WeatherApi = require( '../models/weatherApi' );


var WeatherUI = function(){
  var weatherApi = new WeatherApi();
  weatherApi.get(this.render);
}

WeatherUI.prototype.render = function( weather ) {
  var div = document.createElement("div");
  div.setAttribute("id", "weather-widget");

  var icon = document.createElement("img");
  icon.src = "http://openweathermap.org/img/w/"+ weather.icon +".png";
  div.appendChild(icon);

  var description = document.createElement("p");
  description.innerText = weather.description;
  div.appendChild(description)

  var container = document.querySelector("#container");
  container.appendChild( div );
}

module.exports = WeatherUI;