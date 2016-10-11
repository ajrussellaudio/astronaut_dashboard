var DiaryEntry = require( '../models/diaryEntry.js' );

var DiaryEntryUI = function() {

  this.getTimeStamp();
  
  var titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.innerText = "Subject : ";

  var titleInput = document.createElement( "input" );
  titleInput.setAttribute("id","title-input");
  titleInput.type = "text";
  titleInput.name = "title";
  // input type date is a thing

  // var contentInput = document.createElement( "input" );

  var contentInput = document.createElement( "textarea" );
  contentInput.setAttribute("id","content-input");
  // contentInput.type = "textarea";
  contentInput.name = "content";
  

  // var dateInput = document.createElement( "input" );
  // dateInput.setAttribute("id","date-input");
  // dateInput.type = "date";

  var submit = document.createElement('div');
  submit.innerText= "Save entry"
  submit.setAttribute('id', 'diary-submit')
  submit.onclick = function(){
    if(titleInput.value&&contentInput.value){
      this.buttonClickHandler(new DiaryEntry({
        "title": titleInput.value, 
        "content": contentInput.value, 
        "date": this.getTimeStamp()
      }));
    } else {
      if(!titleInput.value) titleInput.setAttribute("placeholder", "Please type subject");
      if(!contentInput.value) contentInput.setAttribute("placeholder","Please type entry");
    }
  }.bind(this);


  //THEN
  var form = document.createElement( "form" );
  form.setAttribute("id", "diary-form")


  form.appendChild( titleLabel)
  form.appendChild( titleInput );
  form.appendChild( contentInput );
  // form.appendChild( dateInput );
  form.appendChild( submit );

  var divDiary = document.createElement( "div" );
  divDiary.id = "diary-writer";
  divDiary.setAttribute("class", "dashboard-widget");

  divDiary.appendChild(form);

  var widgetContainer = document.querySelector( "#widgets" );
  widgetContainer.appendChild( divDiary );
}

DiaryEntryUI.prototype.buttonClickHandler = function(diaryEntry){
    console.log(diaryEntry);
    diaryEntry.save();
}


//Testing time-stamp info
DiaryEntryUI.prototype.getTimeStamp = function(){
  var date = new Date();
  return date.toUTCString().replace(" GMT", "Z");
}

module.exports = DiaryEntryUI;