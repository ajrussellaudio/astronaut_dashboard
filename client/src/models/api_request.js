var ApiRequest = function() {
}

ApiRequest.prototype.makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.open("GET", url);
  request.onload = function() {
    console.log("The status is : ",this.status)
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var results = JSON.parse(jsonString);
    callback(results);
  };
  request.send();
}

ApiRequest.prototype.makePostRequest = function(url, jsonObject){
  var jsonString = JSON.stringify(jsonObject);
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.send(jsonString);
}


module.exports = ApiRequest;