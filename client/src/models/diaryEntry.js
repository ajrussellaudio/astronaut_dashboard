var DiaryEntry = function(options){
  this.title = options.title;
  this.content = options.content;
  this.date = options.date
}

DiaryEntry.prototype = {}

module.exports = DiaryEntry;