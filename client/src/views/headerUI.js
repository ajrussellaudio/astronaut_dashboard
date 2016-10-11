var AsstronautInfo = require("../models/AsstronautInfo");
var Weather = require("../models/weather");

var HeaderUI = function(){
  this.asstronautInfo = new AsstronautInfo();
  this.weatherInfo = new Weather();
  this.headerContainer = document.querySelector("#header");

  this.renderName();
  this.renderClock();

  var weatherDiv = document.createElement('div');
  weatherDiv.setAttribute("id","weather-div");
  this.headerContainer.appendChild(weatherDiv);
  this.weatherInfo.get(this.renderWeather);
  
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

HeaderUI.prototype.renderWeather = function(weather){
  weatherContainer = document.querySelector("#weather-div")


  var icon = document.createElement("img");
  icon.src = "http://openweathermap.org/img/w/"+ weather.icon +".png";
  weatherContainer.appendChild(icon);

  var description = document.createElement("p");
  description.innerText = weather.description[0].toUpperCase() + weather.description.slice(1);
  weatherContainer.appendChild(description)
}

HeaderUI.prototype.renderClock = function(){
  var date = new Date();
  var timeString = date.toUTCString().replace(" GMT", "Z")

  var clockDiv = document.createElement("div");
  clockDiv.setAttribute("id","clock-div");
  clockDiv.innerText = timeString;

  setInterval(function(){
      clockDiv.innerText = new Date().toUTCString().replace(" GMT", "Z")
  }, 1000);
  this.headerContainer.appendChild(clockDiv)
}

module.exports = HeaderUI;