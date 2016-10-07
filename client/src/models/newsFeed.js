var NewsItem = require('./NewsItem.js');

var NewsFeed = function(){

};

NewsFeed.prototype.makeGetRequest = function(url, callback){
  var request = new XMLHttpRequest;
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

NewsFeed.prototype.all = function(){
  var url = "https://newsapi.org/v1/articles?source=abc-news-au&apiKey=3783803bc3a8459792d27a6ec2340bb7";
  var self = this;
  this.makeGetRequest(url, function(){
    console.log(this.status)
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var result = JSON.parse(jsonString);
    
  })
    
}




module.exports = 