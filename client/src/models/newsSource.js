var ApiRequester = require("./api_request")

var NewsSource = function( options ) {
  if(options){
    this.id   = options.id;
    this.name = options.name;
  }
}

NewsSource.prototype.all = function( callback ) {
  var apiRequester = new ApiRequester();
  var url = "https://newsapi.org/v1/sources?country=gb&category=general";
  var self = this;
  apiRequester.makeRequest( url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var jsonResponse = JSON.parse(jsonString);
    var newsSources = self.parseToSources(jsonResponse);
    callback(newsSources);
  });
}

NewsSource.prototype.parseToSources = function( jsonResponse ) {
  var response = jsonResponse.sources;
  var sources = [];
  response.forEach( function(source) {
    sources.push( new NewsSource( source ) );
  });
  return sources;
}

module.exports = NewsSource;