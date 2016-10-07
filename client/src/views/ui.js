var WeatherApi = require( '../models/weatherApi' );
var NewsFeed = require( '../models/newsFeed' );

var UI = function() {
  var newsFeed = new NewsFeed();
  newsFeed.all( this.render );
}

UI.prototype.render = function( thing ) {
  console.log( thing )
}

module.exports = UI;