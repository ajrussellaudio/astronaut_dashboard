var DiaryEntry = require( '../models/diaryEntry.js' );

var DiaryEntryUI = function() {
  var titleInput = document.createElement( "input" );
  titleInput.type = "text";
  titleInput.name = "title";
  // input type date is a thing

  var submit = document.createElement('input');
  submit.type = 'button'
  submit.value = "Submit";
  submit.onclick = function(){
    console.log('we win mutha fuckker')
  }

  // var submit = submit button;
  // onclick = function() { new DiaryEntry( all the stuff above ) }
  // take that new thing and Stringify/POST
 

  //THEN
  var form = document.createElement( "form" );

  form.appendChild( titleInput );
  form.appendChild( submit);
  var divDiary = document.querySelector("#diary");
  divDiary.appendChild(form);
}

module.exports = DiaryEntryUI;