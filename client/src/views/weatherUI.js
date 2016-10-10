var Weather = require( '../models/weather' );


var WeatherUI = function(){
  var weather = new Weather({});
  weather.get(this.render);
}

WeatherUI.prototype.render = function( weather ) {
  var div = document.createElement("div");
  div.setAttribute("id", "weather");
  div.setAttribute("class","dashboard-widget")

  var icon = document.createElement("img");
  icon.src = "http://openweathermap.org/img/w/"+ weather.icon +".png";
  div.appendChild(icon);

  var description = document.createElement("p");
  description.innerText = weather.description;
  div.appendChild(description)

  var widgetContainer = document.querySelector("#widgets");
  widgetContainer.appendChild( div );
}

module.exports = WeatherUI;