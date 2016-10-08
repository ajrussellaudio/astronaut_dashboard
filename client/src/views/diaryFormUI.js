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
    console.log( titleInput.value, contentInput.value, dateInput.value );
  }

  // var submit = submit button;
  // onclick = function() { new DiaryEntry( all the stuff above ) }
  // take that new thing and Stringify/POST
 

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

module.exports = DiaryEntryUI;