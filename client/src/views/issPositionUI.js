var IssPosition = require( '../models/issPosition' );

var IssPositionUI = function(){
  var issPosition = new IssPosition({});
  issPosition.get(function(data){console.log(data)});
  
}


var Map = function(container, issPosition, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: issPosition,
    zoom: zoom
  });
}

Map.prototype = {
  addMarker: function(issPosition){
    var marker = new google.maps.Marker({
      position: issPosition,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  },

//added for future expansion
  // addInfoWindow: function(latLng, text) {
  //   var marker = this.addMarker(latLng);
  //   marker.addListener('click', function() {
  //     var infowindow = new google.maps.InfoWindow({
  //         content: text
  //       });
  //     infowindow.open(this.map, marker); 
  //   });
  // },
  
}


module.exports = IssPositionUI;