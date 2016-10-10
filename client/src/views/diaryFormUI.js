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
    this.buttonClickHandler(titleInput, contentInput, dateInput);
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


DiaryEntryUI.prototype.buttonClickHandler = function(titleInput, contentInput, dateInput) {
    var jsonDiaryEntry = {
      title: titleInput.value,
      content: contentInput.value,
      date: dateInput.value
    }
    var diaryEntry = new DiaryEntry(jsonDiaryEntry);
    diaryEntry.save();

    // var jsonDiaryString = JSON.stringify(jsonDiaryEntry);
    console.log(diaryEntry);
}

module.exports = DiaryEntryUI;