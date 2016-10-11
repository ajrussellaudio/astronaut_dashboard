var NewsItem = require( '../models/newsItem' );
var NewsSource = require( '../models/newsSource' );

var NewsFeedUI = function(){
  var newsSource = new NewsSource();
  newsSource.all( this.renderSources );
}

NewsFeedUI.prototype.render = function(news){
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
    img.width = 120;
    img.src = newsItem.imageUrl;
    itemDiv.appendChild( img );

    div.appendChild( itemDiv );
  });
  
  var container = document.querySelector("#container");
  container.appendChild( div )
}

NewsFeedUI.prototype.populateFeed = function( source ) {  
  var newsItem = new NewsItem();
  newsItem.all(source, this.render);
}

NewsFeedUI.prototype.renderSources = function( sources ) {
  console.log(sources);

  var div = document.createElement( "div" );
  div.setAttribute( "id", "news-sources" );

  var dropDown = document.createElement("select");

  sources.forEach( function(source) {
    var option = document.createElement("option");
    option.value = source.id;
    option.innerText = source.name;
    dropDown.options.add( option );
  });

  dropDown.onchange = function(item) {
    console.log( this );
    this.populateFeed( dropDown.value );
  }.bind(NewsFeedUI.prototype)

  div.appendChild( dropDown );

  var container = document.querySelector("#container");
  container.appendChild( div );
}

module.exports = NewsFeedUI;