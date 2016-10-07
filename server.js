var express = require( 'express' );
var app = express();
var path = require( 'path' );
var WeatherApi = require( './api/weather_api' );

app.use( express.static( 'client/build' ) );

app.listen( 3000, function() {
  new WeatherApi( app );
  console.log( "App is fuckin' runnin' on port", this.address().port );
});