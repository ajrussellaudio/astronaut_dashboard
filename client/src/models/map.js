// var issPosition = require("./model/issPosition")

var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
    mapTypeId: 'satellite',
    disableDefaultUI: true
  });
  this.pathTracer = [];
  this.tracerToggle = false;

}

Map.prototype.addMarker = function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    icon: 'http://icons.iconarchive.com/icons/iconfactory/star-wars-1/32/Death-Star-2-icon.png'
  });
  this.removePreviousPosition();
  this.pathTracer.push(marker);
  return marker;
}

Map.prototype.removePreviousPosition = function(){
  if (this.pathTracer.length > 0){
    var previousMarker = this.pathTracer[this.pathTracer.length-1]
     previousMarker.setIcon("http://www.aialosangeles.org/images/map-dot.png");
    if(!this.tracerToggle){
      previousMarker.setMap(null);
    }
  }
}

Map.prototype.moveCenter = function(coords){
  this.googleMap.panTo(coords);
};

Map.prototype.toggleTracer = function(){
  this.tracerToggle = (this.tracerToggle !== true);
  var mapChange;
  if (this.tracerToggle){
    mapChange = this.googleMap;
  } else {
    mapChange = null;
  }
  for (var i = 0;i<this.pathTracer.length-1;i++){
    this.pathTracer[i].setMap(mapChange);
  }
}




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