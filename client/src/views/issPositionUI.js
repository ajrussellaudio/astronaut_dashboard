var IssPosition = require( '../models/issPosition' );
var Map = require('../models/map')

var Map = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
},

Map.prototype = {
  addMarker: function(coords){
  var marker = new google.maps.Marker({
  position: coords,
  map: this.googleMap,
  animation: google.maps.Animation.DROP
  });

  return marker;
},

// addInfoWindow: function(latLng, text) { //not sure we want to add this yet.
//   var marker = this.addMarker(latLng);
//   marker.addListener('click', function() {
//   var infowindow = new google.maps.InfoWindow({
//     content: text
//   });
//   infowindow.open(this.map, marker); 
//   });
// },
    
geoLocate: function(){
  navigator.geolocation.getCurrentPosition(function(position) {
  var center = {
    lat: position.coords.latitude, 
    lng: position.coords.longitude}; 
  this.googleMap.setCenter(center); 
  this.addMarker(center);
  }.bind(this)); 


  

module.exports = IssPositionUI;