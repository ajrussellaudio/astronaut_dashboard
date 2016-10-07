var Weather = function( options ) {
  this.id = options.id;
  this.main = options.main;
  this.description = options.description;
  this.icon = options.icon;
}

module.exports = Weather;