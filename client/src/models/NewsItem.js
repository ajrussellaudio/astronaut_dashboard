var NewsItem = function(options){
  this.headline = options.title;
  this.decription = options.description;
  this.url = options.url;
  this.imageUrl = options.urlToImage;
  this.timeStamp = options.publishedAt;

}

NewsItem.prototype = {

}

module.exports = NewsItem;