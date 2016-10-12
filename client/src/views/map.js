// var issPosition = require("./model/issPosition")

var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

Map.prototype.addMarker = function(coords){
    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
     
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.DROP,
      icon: 'http://icons.iconarchive.com/icons/iconfactory/star-wars-1/32/Death-Star-2-icon.png'
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