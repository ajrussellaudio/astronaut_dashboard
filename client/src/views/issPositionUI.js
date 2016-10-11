// var MapUI = require( '../models/googleMapsApi' );
var IssPosition = require( '../models/issPosition' );
var Map = require('./map')

var MapUI = function(){
  // map.getLocation(this.render);
  this.render()
};

MapUI.prototype.render = function( map ) { 

  var div = document.createElement('div');
  div.setAttribute('id', 'weather');
  div.setAttribute("class","dashboard-widget")
  var widget = document.querySelector("#widgets");
  widget.appendChild(div);
  var map = new Map(div, {lat: 0, lng:0}, 2);

}
module.exports = MapUI;