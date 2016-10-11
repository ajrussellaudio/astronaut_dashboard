var DiaryEntry = require("../models/diaryEntry")


var DiaryFeedUI = function(){
  var diaryEntry = new DiaryEntry();
  diaryEntry.all(this.render);
};

DiaryFeedUI.prototype.render = function( diaryFeed ) { 

  // widget box
  var div = document.createElement('div');
  div.setAttribute('id', 'diary-feed');
  div.setAttribute('class', 'dashboard-widget');


  // div.addEventListener('wheel', function(event) {
  //     var deltaY = event.deltaY;
  //     var contentHeight = div.scrollHeight;
  //     var visibleHeight = div.offsetHeight;
  //     var scrollTop = div.scrollTop;

  //     if (scrollTop === 0 && deltaY < 0)
  //         event.preventDefault();
  //     else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
  //         event.preventDefault();
  // });


  //for every entry in diary feed
  diaryFeed.forEach(function(diaryEntry){

    var diaryEntryBox = document.createElement('div');
    diaryEntryBox.setAttribute('class', 'diary-item');

    var date = document.createElement('h5');
    date.innerText = diaryEntry.date;

    var title = document.createElement('h2');
    title.innerText = diaryEntry.title;

    var content = document.createElement('p');
    content.innerText = diaryEntry.content;

    var divider = document.createElement('div');
    divider.setAttribute("class","horizontal-divider");

    diaryEntryBox.appendChild(date);
    diaryEntryBox.appendChild(title);
    diaryEntryBox.appendChild(content);
    diaryEntryBox.appendChild(divider);
    div.appendChild(diaryEntryBox);
  })

  var container = document.querySelector("#widgets");
  container.appendChild( div );
}


module.exports = DiaryFeedUI;