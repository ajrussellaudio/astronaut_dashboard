var ApiRequester = require("./api_request")

var DiaryEntry = function(options){
  this.title = options.title;
  this.content = options.content;
  this.date = options.date
}


DiaryEntry.prototype.save = function(){
  var apiRequester = new ApiRequester();
  var url= "http://localhost:3000/api/diary"
  console.log(apiRequester)
  apiRequester.makePostRequest(url, {
    "diary": this
  }, function() {
    window.location.reload();
  })
}

module.exports = DiaryEntry;