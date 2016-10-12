var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );
var DiaryUI = require('./diaryUI')
var DiaryFormUI = require( './diaryFormUI' );
var ImageUI = require( './imageUI' );
<<<<<<< HEAD
var HeaderUI = require('./headerUI')
=======
var MapUI = require('./IssPositionUI')

>>>>>>> feature/issposition


var UI = function() {
  var body = document.querySelector('body');

  var header = document.createElement("div");
  header.setAttribute("id", "header");

  var container = document.createElement('div');
  container.setAttribute("id", "container");
  
  var widgets = document.createElement('div');
  widgets.setAttribute("id", "widgets");

  body.appendChild(header);
  body.appendChild(container);
  container.appendChild(widgets);


  this.setStyle("style.css");
  this.setStyle("news.css");

  // new WeatherUI();
  new NewsFeedUI();
  new DiaryUI();
  new DiaryFormUI();
  new ImageUI();
  new HeaderUI();
  new MapUI();

  
};

UI.prototype.setStyle = function(href){

  var head = document.querySelector("head");
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", href);
  head.appendChild(link);

}

module.exports = UI;
