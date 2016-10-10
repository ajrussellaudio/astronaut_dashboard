var ApiRequester = require("./api_request")

var DiaryEntry = function(options){
  this.title = options.title;
  this.content = options.content;
  this.date = options.date
}


DiaryEntry.prototype.save = function(){
  var apiRequester = new ApiRequester();
  var url = "http://localhost:3000/api/diary";
  var jsonObject = { "diary": this };
  console.log( jsonObject );
  apiRequester.makePostRequest(url, jsonObject, function() {
    window.location.reload();
  });
}

DiaryEntry.prototype.parseToDiaryEntries = function(jsonArray){
  var entries = []
  jsonArray.forEach(function(entry){
    entries.push(new DiaryEntry(entry))
  })
  return entries;
}

DiaryEntry.prototype.all = function(callback){
  var apiRequester = new ApiRequester();
  var url = "http://localhost:3000/api/diary";
  var self = this;
  apiRequester.makeRequest(url, function(req,res){
    if(this.status !== 200);
    var jsonString = this.responseText;
    var jsonResponse = JSON.parse(jsonString);
    var diaryFeed = self.parseToDiaryEntries(jsonResponse);
    callback(diaryFeed);
  });
};


module.exports = DiaryEntry;