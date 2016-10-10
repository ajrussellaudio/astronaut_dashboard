var DiaryEntry = require( '../models/diaryEntry.js' );

var DiaryEntryUI = function() {
  var titleInput = document.createElement( "input" );
  titleInput.setAttribute("id","titleInput");
  titleInput.type = "text";
  titleInput.name = "title";
  // input type date is a thing

  var contentInput = document.createElement( "input" );
  contentInput.setAttribute("id","contentInput");
  contentInput.type = "textarea";
  contentInput.name = "content";

  var dateInput = document.createElement( "input" );
  dateInput.setAttribute("id","dateInput");
  dateInput.type = "date";

  var submit = document.createElement('input');
  submit.type = 'button'
  submit.value = "Submit";
  submit.onclick = function(){
    this.buttonClickHandler(new DiaryEntry({
      "title": titleInput.value, 
      "content": contentInput.value, 
      "date": dateInput.value
    }));
  }.bind(this);

  //THEN
  var form = document.createElement( "form" );

  form.appendChild( titleInput );
  form.appendChild( contentInput );
  form.appendChild( dateInput );
  form.appendChild( submit );

  var divDiary = document.createElement( "div" );
  divDiary.id = "diary-writer";
  divDiary.setAttribute("class", "dashboard-widget")

  divDiary.appendChild(form);

  var widgetContainer = document.querySelector( "#widgets" );
  widgetContainer.appendChild( divDiary );
}

DiaryEntryUI.prototype.buttonClickHandler = function(diaryEntry){
    console.log(diaryEntry);
    diaryEntry.save();
}

module.exports = DiaryEntryUI;