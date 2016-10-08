var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );

var UI = function() {
  var body = document.querySelector('body')
  var container = document.createElement('div');
  container.setAttribute("id", "container")
  body.appendChild(container)

  new WeatherUI();
  new NewsFeedUI();
  // newsFeed.all( this.newsRender );
  // weather.get( this.weatherRender );
}

module.exports = UI;
