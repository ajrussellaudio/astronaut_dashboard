var WeatherApi = require( '../models/weatherApi' );
var NewsFeed = require( '../models/newsFeed' );

var UI = function() {
  var newsFeed = new NewsFeed();
  var weather = new WeatherApi();
  newsFeed.all( this.newsRender );
  weather.get( this.render );
}

UI.prototype.render = function( thing ) {
  console.log( thing );
}

UI.prototype.newsRender = function( news ) {
  var div = document.createElement( "div" );
  div.setAttribute( "id", "news-feed" );

  var children = [];

  news.forEach( function( newsItem ) {
    var itemDiv = document.createElement( "div" );
    itemDiv.setAttribute( "class", "news-item" );

    var headline = document.createElement( "h3" );
    headline.innerText = newsItem.headline;
    itemDiv.appendChild( headline );

    var description = document.createElement( "p" );
    description.innerText = newsItem.description;
    itemDiv.appendChild( description );

    var img = document.createElement( "img" );
    img.width = 70;
    img.height = 70;
    img.src = newsItem.imageUrl;
    itemDiv.appendChild( img );

    div.appendChild( itemDiv );
  });

  var container = document.querySelector("#container");
  container.appendChild( div )

}

module.exports = UI;