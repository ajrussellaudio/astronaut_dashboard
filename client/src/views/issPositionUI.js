var IssPosition = require( '../models/issPosition' );

var MapUI = function(){
  var map = new Map();
  map.getLocation(this.render);
};

MapUI.prototype.render = function( map ) { 

  // widget box
  var div = document.createElement('div');
  div.setAttribute('id', 'map');