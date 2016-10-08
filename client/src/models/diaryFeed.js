var DiaryEntry = require("./diaryEntry");

var DiaryFeed = function(){

};

DiaryFeed.prototype.makeRequest = function(url, callback){
  var request = new XMLHttpRequest()
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

DiaryFeed.prototype.parseToDiaryEntries = function(jsonArray){
  var entries = []
  jsonArray.forEach(function(entry){
    entries.push(new DiaryEntry(entry))
  })
  return entries;
}

DiaryFeed.prototype.all = function(callback){
  var url = "http://localhost:3000/api/diary";
  var self = this;
  makeRequest(url, function(req,res){
    if(this.status !== 200);
    var jsonString = this.responseText;
    var jsonResponse = JSON.parse(response);
    var diaryFeed = self.parseToDiaryEntries();
    callback(diaryFeed);
  });
};


