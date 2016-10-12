// var issPosition = require("./model/issPosition")

var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

Map.prototype.addMarker = function(coords){
    
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP
    });
    return marker;
  }

Map.prototype.moveCenter = function(coords){
  this.googleMap.panTo(coords);
};



// Map.prototype.addInfoWindow =function(latLng, text) {
//   var marker = this.addMarker(latLng);
//   marker.addListener('click', function() {
//     var infowindow = new google.maps.InfoWindow({
//       content: text
//     });
//   infowindow.open(this.map, marker); 
//   });
// }

module.exports = Map;