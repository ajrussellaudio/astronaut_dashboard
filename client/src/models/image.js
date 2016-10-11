var ApiRequester = require("./api_request");

var Image = function(options) {
  if(options)
  {this.url = options.urls.regular;
  this.name = options.user.name;}
};

Image.prototype.parseToImages = function(jsonResponse) {
  var images = jsonResponse.results;
  var output = [];
  images.forEach(function(result) {
    output.push(new Image(result.cover_photo));
  });
  return output;
}

Image.prototype.all = function(callback) {
  var apiRequester = new ApiRequester();
  var url = 'https://api.unsplash.com/search/collections?query=scotland&page=1&client_id=d98acf5b104b7cc37edcc1f00cba77f379800d44c57c132ffe1707e6d7c74fbe';
  var self = this;
  apiRequester.makeRequest(url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var jsonResponse = JSON.parse(jsonString);
    var images = self.parseToImages(jsonResponse);
    callback(images);
  });
}

module.exports = Image;