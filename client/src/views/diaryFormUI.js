var DiaryEntry = require( '../models/diaryEntry.js' );

var DiaryEntryUI = function() {
  var titleInput = document.createElement( "input" );
  titleInput.type = "text";
  titleInput.name = "title";
  // input type date is a thing

  var contentInput = document.createElement( "input" );
  contentInput.type = "textarea";
  contentInput.name = "content";

  var dateInput = document.createElement( "input" );
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
  divDiary.id = "diary";

  divDiary.appendChild(form);

  var body = document.querySelector( "body" );
  body.appendChild( divDiary );
}

DiaryEntryUI.prototype.buttonClickHandler = function(diaryEntry){
    console.log(diaryEntry);
    diaryEntry.save();
}

module.exports = DiaryEntryUI;