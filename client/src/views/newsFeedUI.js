var NewsItem = require( '../models/newsItem' );
var NewsSource = require( '../models/newsSource' );

var NewsFeedUI = function(){
  var newsSource = new NewsSource();
  this.renderNewsBar();
  newsSource.all( this.renderSources );
}

NewsFeedUI.prototype.render = function(news){
  var div = document.getElementById("news-feed")
  if( !div ) div = document.createElement( "div" );
  div.setAttribute( "id", "news-feed" );
  while (div.firstChild) {
      div.removeChild(div.firstChild);
  }
  var children = [];

  news.forEach( function( newsItem ) {
    var itemDiv = document.createElement( "div" );
    itemDiv.setAttribute( "class", "news-item" );

    var headline = document.createElement( "h3" );
    var link = document.createElement( "a" );
    link.href = newsItem.url;
    link.target = "_blank";
    link.innerText = newsItem.headline;
    headline.appendChild( link );
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
  
  var newsBar = document.querySelector("#news-bar");
  newsBar.appendChild( div );
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
  var defaultOption = document.createElement("option");
  defaultOption.innerText = "Select a news source...";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  dropDown.options.add( defaultOption );

  sources.forEach( function(source) {
    if(source.id === 'daily-mail') return; // Fuck the Daily Mail! (Alan)
    var option = document.createElement("option");
    option.value = source.id;
    option.innerText = source.name;
    dropDown.options.add( option );
  });

  dropDown.onchange = function(item) {
    this.populateFeed( dropDown.value );
  }.bind(NewsFeedUI.prototype)

  div.appendChild( dropDown );

  var newsBar = document.querySelector("#news-bar");
  newsBar.appendChild( div );
}

NewsFeedUI.prototype.renderNewsBar = function() {
  var newsBar = document.createElement( "div" );
  newsBar.setAttribute("id", "news-bar");
  newsBar.width = "20%";

  var container = document.querySelector("#container");
  container.appendChild( newsBar );
}

module.exports = NewsFeedUI;