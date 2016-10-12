var ApiRequester = require("./api_request");

var IssPosition = function( options ) {
  if(options){
  this.lat = options.iss_position.latitude;
  this.lng = options.iss_position.longitude;
  }
}

IssPosition.prototype.get = function( callback ) {
  var apiRequester = new ApiRequester();
  var url = "http://api.open-notify.org/iss-now.json";
  var self = this;
  apiRequester.makeRequest(url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var issPosObj = JSON.parse( jsonString );
    var issPos = self.populateIssPos( issPosObj );
    callback( issPos );
    
  });
} 

IssPosition.prototype.populateIssPos = function(issPosObj) {
   var issPos = new IssPosition(issPosObj);
   return issPos;
 }

module.exports = IssPosition;