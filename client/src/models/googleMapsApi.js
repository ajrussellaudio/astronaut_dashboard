var ApiRequester = require("./api_request");
var IssPosition = require("./issPosition")

var InitializeMap = function(issPosition){
  var container = document.getElementById('map'); // this isnt right
  
  var map = new Map(container, center, 10);
  // map.addMarker(center);

  var findLocation = function(){
    map.geoLocate();
  }

InitializeMap.prototype.get = function( callback ) {
  var apiRequester = new ApiRequester();
  var url = "https://maps.googleapis.com/maps/api/js";
  var self = this;
  apiRequester.makeRequest(url, function() {
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var issPosObj = JSON.parse( jsonString );
    var issPos = self.populateIssPos( issPosObj );
    callback( issPos );
  });
} 


module.exports = googleMap;