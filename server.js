var express = require( 'express' );
var app = express();
var path = require( 'path' );


app.use( express.static( 'client/build' ) );

app.listen( 3000, function() {
  console.log( "App is fuckin' runnin' on port", this.address().port );
});