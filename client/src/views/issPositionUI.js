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
  var coords = {lat: 0, lng:0}
  var map = new Map(div, coords, 10);
  var issPosition = new IssPosition();
  
  setInterval(function(){

    issPosition.get(function(issPosition){
      console.log ("Pinging iss", issPosition)
      map.addMarker(issPosition);
      map.moveCenter(issPosition);
    });
    
  }, 5000)
   


}
module.exports = MapUI;