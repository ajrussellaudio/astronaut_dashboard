var ApiRequester = require("./api_request");

var IssPosition = function( options ) {
  if(options){
  this.lat = options.latitude;
  this.long = options.longitude;
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
    var mapPosition = {
      lat: issPos.latitude,
      long: issPos.longitude
    }
    callback( mapPosition );
    console.log(mapPosition);
  });
} 

IssPosition.prototype.populateIssPos = function(issPosObj) {
   var issPos = new IssPosition(issPosObj['iss_position']);
   return issPos;
 }

module.exports = IssPosition;