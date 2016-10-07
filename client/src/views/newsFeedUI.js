var NewsFeed = require( '../models/newsFeed' );

var NewsFeedUI = function(){
  var newsFeed = new NewsFeed();
  newsFeed.all(this.render)

}

NewsFeedUI.prototype.render = function(news){
  console.log(news)
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

module.exports = NewsFeedUI;