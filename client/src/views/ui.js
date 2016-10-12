var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );
var DiaryUI = require('./diaryUI')
var DiaryFormUI = require( './diaryFormUI' );
var ImageUI = require( './imageUI' );
var HeaderUI = require('./headerUI')


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

<<<<<<< HEAD
  this.setStyle("style");
  this.setStyle("news");
=======
  this.setStyle("style.css");
>>>>>>> 0b00d43ed2a5d9d2e8665ea98da09645a1a6269c

  // new WeatherUI();
  new NewsFeedUI();
  new DiaryUI();
  new DiaryFormUI();
  new ImageUI();
  new HeaderUI();
  
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
