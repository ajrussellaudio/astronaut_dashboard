var WeatherUI = require( './weatherUI' );
var NewsFeedUI = require( './newsFeedUI' );
var DiaryUI = require('./diaryUI')
var DiaryFormUI = require( './diaryFormUI' );
var IssPositionUI = require('./issPositionUI')


var UI = function() {
  var body = document.querySelector('body')
  var container = document.createElement('div');
  container.setAttribute("id", "container")
  body.appendChild(container)


  new WeatherUI();
  new NewsFeedUI();
  new DiaryUI();
  new DiaryFormUI();
  new IssPositionUI();
};

module.exports = UI;
