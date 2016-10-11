var AsstronautInfo = require("../models/AsstronautInfo")

var HeaderUI = function(){
  this.asstronautInfo = new AsstronautInfo();

  this.headerContainer = document.querySelector("#header")
  this.renderName(headerContainer);

  this.renderClock(headerContainer);
  this.renderWeather(headerContainer);
}




HeaderUI.prototype.renderName = function(){
  //make name div
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("id", "name-container");

  if (this.asstronautInfo.name){
    makeNameElement(nameDiv);
  } else {
    makeNameBox(nameDiv);
  }
  this.headerContainer.appendChild(nameDiv);
}

HeaderUI.prototype.renderNameElement = function(contianer){
  var h1 = document.createElement("h1");
  h1.setAttribute()
  h1.innerText = this.asstronautInfo.name;
  container.appendChild(h1);
}

HeaderUI.prototype.renderNameBox = function(container){
  var nameInput = document.createElement("textarea");
  nameInput.setAttribute("id","name-input");

}





HeaderUI.prototype.renderClock = function(container){}
HeaderUI.prototype.renderWeather = function(container){}

new HeaderUI()