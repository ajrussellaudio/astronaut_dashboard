var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );
var DiaryUI = require('./diaryUI')
var DiaryFormUI = require( './diaryFormUI' );


var UI = function() {
  var body = document.querySelector('body');

  var header = document.createElement("div");
  header.setAttribute("id", "header");

  //temporary lorem for header
  var h1Tag = document.createElement('h3');
  h1Tag.innerText = "Jason Parson";
  header.appendChild(h1Tag);

  var container = document.createElement('div');
  container.setAttribute("id", "container");
  
  var widgets = document.createElement('div');
  widgets.setAttribute("id", "widgets");

  body.appendChild(header);
  body.appendChild(container);
  container.appendChild(widgets);

  this.setStyle("style");

  new WeatherUI();
  new NewsFeedUI();
  new DiaryUI();
  new DiaryFormUI();

  // var widgets = document.querySelectorAll(".dashboard-widget")
  // console.log(widgets)
  // for (var i = 0; i<widgets.length;i++){

  //   widgets[i].onclick = function(){
  //     console.log("click")
  //     console.log(this)
  //     this.style.height = 600;
  //     this.style.width = 600;
  //   }
  //   console.log(widgets[i].onclick)
  // }
};

UI.prototype.setStyle = function(href){

  var head = document.querySelector("head");
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", href + ".css");
  head.appendChild(link);

}

module.exports = UI;
