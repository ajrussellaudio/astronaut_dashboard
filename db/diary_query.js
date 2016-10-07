var MongoClient = require('mongodb').MongoClient;

var DiaryQuery = function() {
  this.url = 'mongodb://localhost:27017/dashboard_site';
}

DiaryQuery.prototype.getAll = function (onQueryFinished){
  MongoClient.connect(this.url, function(err, db) {
    var collection = db.collection('diary');
    collection.find().toArray(function(err, docs) {
      onQueryFinished(docs);
    });
  });
}

module.exports = DiaryQuery;