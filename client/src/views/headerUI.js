var AsstronautInfo = require("../models/AsstronautInfo")

var HeaderUI = function(){
  this.asstronautInfo = new AsstronautInfo();

  this.headerContainer = document.querySelector("#header")
  this.renderName();

  this.renderClock(this.headerContainer);
  // this.renderWeather(headerContainer);
}


HeaderUI.prototype.renderClock = function(container){
  
  var date = new Date();
  var timeString = date.toUTCString().replace(" GMT", "Z")

  var clockDiv = document.createElement("div");
  clockDiv.setAttribute("id","clock-div");
  clockDiv.innerText = timeString;

  setInterval(function(){

      clockDiv.innerText = new Date().toUTCString().replace(" GMT", "Z")
  }, 1000);

  container.appendChild(clockDiv)

}







// Functions to render name to header
HeaderUI.prototype.renderName = function(){
  //make name div
  var nameDiv = document.getElementById("name-container") || document.createElement("div");
  nameDiv.setAttribute("id", "name-container");

  if (this.asstronautInfo.name){
    console.log(this.asstronautInfo.name)
    this.renderNameElement(nameDiv);
  } else {
    console.log("unable to read local storage")
    this.renderNameBox(nameDiv);
  }

  this.headerContainer.appendChild(nameDiv);
}

HeaderUI.prototype.renderNameElement = function(container){
  console.log(container)
  var headName = document.createElement("p");
  headName.setAttribute("id","name-header");
  headName.innerText = this.asstronautInfo.name;
  container.appendChild(headName);
}

HeaderUI.prototype.renderNameBox = function(container){
  // var nameInputDiv = documnet.createElement("div");
  // nameInputDiv.setAttribute("id", "name-input-div");
  var nameInput = document.createElement("textarea");
  nameInput.setAttribute("id","name-input");


  var nameSubmitButton = document.createElement("div");
  nameSubmitButton.setAttribute("id","name-submit");
  nameSubmitButton.innerText = "Submit name"

  var selfAsstronautInfo = this.asstronautInfo;
  // var context = this.asstronautInfo;
  nameSubmitButton.onclick = function(){
    console.log(this);
    selfAsstronautInfo.saveName(nameInput.value);
    window.location.reload();
  }

  container.appendChild(nameInput);
  container.appendChild(nameSubmitButton)
}


HeaderUI.prototype.renderWeather = function(container){}

module.exports = HeaderUI;