var AsstronomerInfo = function(){
  this.name = this.getNameFromStorage();
  this.publication = this.getPublicationFromStorage();
}

AsstronomerInfo.prototype.saveName = function(name){
  localStorage.setItem("asstronautName", name);
}

AsstronomerInfo.prototype.savePublication = function(publication){
  localStorage.setItem("publication", publication);
}

AsstronomerInfo.prototype.getNameFromStorage = function(){
  return localStorage.getItem("asstronautName");
}
AsstronomerInfo.prototype.getPublicationFromStorage = function(){
  return localStorage.getItem("publication");
}


module.exports = AsstronomerInfo;