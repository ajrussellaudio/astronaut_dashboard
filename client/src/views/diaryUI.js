var DiaryFeed = require("../models/diaryFeed")


var DiaryFeed = function(){
  var diaryFeed = new DiaryFeed();
  diaryFeed.all(this.render);
};

DiaryFeed.prototype.render = function( diaryFeed ) { // [{log1}, {log2}]
  
  // widget box
  var div = document.createElement('div');
  div.setAttribute('id', 'diaryFeed');

  //for every entry in diary feed
  diaryFeed.forEach(function(diaryEntry){

    var diaryEntryBox = document.createElement('div');
    diaryEntryBox.setAttribute('class', 'diaryItem');

    var date = document.createElement('h5');
    date.innerText = diaryEntry.date;

    var title = document.createElement('h2');
    title.innerText = diaryEntry.title;

    var content = document.createElement('p');
    content.innerText = diaryEntry.content;

    diaryEntryBox.appendChild(date);
    diaryEntryBox.appendChild(title);
    diaryEntryBox.appendChild(content);
    div.appendChild(diaryEntryBox);
  })
}


