var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );
var DiaryUI = require('./diaryUI')
var DiaryFormUI = require( './diaryFormUI' );


var UI = function() {
  var body = document.querySelector('body')
  var container = document.createElement('div');
  container.setAttribute("id", "container");
  body.appendChild(container);

  var widgets = document.createElement('div');
  widgets.setAttribute("id", "widgets")
  container.appendChild(widgets)

  this.setStyle("style")

  new WeatherUI();
  new NewsFeedUI();
  new DiaryUI();
  new DiaryFormUI();
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
