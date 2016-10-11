var mapInitialize = function(){
  var container = document.getElementById('map');

  var center = { lat: 40.712784, lng: -74.005941 };

  var map = new Map(container, center, 10);
    map.addMarker(center);

  var findLocation = function(){
    map.geoLocate();
  }

}

