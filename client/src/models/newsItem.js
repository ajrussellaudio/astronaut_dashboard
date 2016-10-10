var ApiRequester = require("./api_request")

var NewsItem = function(options){
  this.headline = options.title;
  this.description = options.description;
  this.url = options.url;
  this.imageUrl = options.urlToImage;
  this.timeStamp = options.publishedAt;
};

NewsItem.prototype.parseToNewsItems = function(jsonRep){
  var articles = jsonRep.articles;
  newsFeed = [];
  articles.forEach(function(article){
    newsFeed.push(new NewsItem(article));
  })
  return newsFeed;
}

NewsItem.prototype.all = function(callback){
  var apiRequester = new ApiRequester();
  var url = "https://newsapi.org/v1/articles?source=abc-news-au&apiKey=3783803bc3a8459792d27a6ec2340bb7";
  var self = this;
  apiRequester.makeRequest(url, function(){
    // console.log(this.status);
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var jsonResponse = JSON.parse(jsonString);
    newsFeed = self.parseToNewsItems(jsonResponse);
    callback(newsFeed);
  })   
}

module.exports = NewsItem;