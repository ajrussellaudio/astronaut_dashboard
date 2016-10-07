var WeatherApi = require( '../models/weatherApi' );
var NewsFeed = require( '../models/newsFeed' );

var UI = function() {
  var newsFeed = new NewsFeed();
  var weather = new WeatherApi();
  newsFeed.all( this.render );
  weather.get( this.render );
}

UI.prototype.render = function( thing ) {
  console.log( thing );
}

module.exports = UI;