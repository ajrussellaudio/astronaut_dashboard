var AsstronautInfo = require("../models/AsstronautInfo")

var HeaderUI = function(){
  this.asstronautInfo = new AsstronautInfo();

  this.headerContainer = document.querySelector("#header")
  this.renderName(headerContainer);
  this.renderClock(headerContainer);
  this.renderWeather(headerContainer);
}




HeaderUI.prototype.renderName = function(container){
  //make name div
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("id", "name-container");


  if (name) {
    renderNameElement(nameDiv);
  } else {
    renderNameQuestion(nameDiv);
  }
}

HeaderUI.prototype.renderNameElemet = function(contianer)
HeaderUI.prototype





HeaderUI.prototype.renderClock = function(container){}
HeaderUI.prototype.renderWeather = function(container){}

new HeaderUI()