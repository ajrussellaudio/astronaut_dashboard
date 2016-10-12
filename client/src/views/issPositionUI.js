var IssPosition = require( '../models/issPosition' );
var Map = require('../models/map')

var MapUI = function(){
  
  this.render()
};

MapUI.prototype.render = function( map ) { 

  var widgets = document.querySelector("#widgets");

  var div = document.createElement('div');
  div.setAttribute('id', 'iss-pos');
  div.setAttribute("class","dashboard-widget");

  divHeader = document.createElement('p');
  divHeader.setAttribute("id","iss-pos-header")
  divHeader.innerText = "Current Position"

  mapDiv = document.createElement('div');
  mapDiv.setAttribute("id","iss-pos-map");

  div.appendChild(divHeader)
  div.appendChild(mapDiv)


  widgets.appendChild(div);


  // setting up map and listener
  var coords = {lat: 0, lng:0};
  var map = new Map(mapDiv, coords, 3);
  var issPosition = new IssPosition();
  setInterval(function(){
    issPosition.get(function(issPosition){
      console.log ("Pinging iss", issPosition)
      map.addMarker(issPosition);
      map.moveCenter(issPosition);
    });
    
  }, 5000)
  

  div.ondblclick =function(){
    console.log("doubleclick")
    map.toggleTracer()
  }


}
module.exports = MapUI;