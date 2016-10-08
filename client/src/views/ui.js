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

UI.prototype.weatherRender = function( weather ) {
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

// UI.prototype.newsRender = function( news ) {
//   var div = document.createElement( "div" );
//   div.setAttribute( "id", "news-feed" );

//   var children = [];

<<<<<<< HEAD
  news.forEach( function( newsItem ) {
    var itemDiv = document.createElement( "div" );
    itemDiv.setAttribute( "class", "news-item" );
    itemDiv.onclick = function(){
      console.log("click")
    }
=======
//   news.forEach( function( newsItem ) {
//     var itemDiv = document.createElement( "div" );
//     itemDiv.setAttribute( "class", "news-item" );
>>>>>>> aea8dca60499d6653e266fb6b62bf0d9d5aeec50

//     var headline = document.createElement( "h3" );
//     headline.innerText = newsItem.headline;
//     itemDiv.appendChild( headline );

//     var description = document.createElement( "p" );
//     description.innerText = newsItem.description;
//     itemDiv.appendChild( description );

//     var img = document.createElement( "img" );
//     img.width = 70;
//     img.height = 70;
//     img.src = newsItem.imageUrl;
//     itemDiv.appendChild( img );

//     div.appendChild( itemDiv );
//   });

//   var container = document.querySelector("#container");
//   container.appendChild( div )

// }

module.exports = UI;