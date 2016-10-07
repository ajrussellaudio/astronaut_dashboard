var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var DiaryApi = require('./apis/diaryApi');



app.use( express.static( 'client/build' ) );

app.listen( 3000, function() {
  new DiaryApi(app);
  console.log( "App is fuckin' runnin' on port", this.address().port );
});