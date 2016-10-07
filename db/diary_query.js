var MongoClient = require('mongodb').MongoClient;

var DiaryQuery = function() {
  this.url = 'mongodb://localhost:27017/dashboard_site';
}

DiaryQuery.prototype.getAll = function (onQueryFinished){
  console.log('alansacunt')
  MongoClient.connect(this.url, function(err, db) {
    var collection = db.collection('diary');
    collection.find().toArray(function(err, docs) {
      onQueryFinished(docs);
    });
  });
}

DiaryQuery.prototype.createEntry = function(entry, onQueryFinished){
  MongoClient.connect(this.url, function(err, db){
    if(db){
      var collection = db.collection('diary');
      console.log(entry);
      collection.insertOne(entry, function(err, res){
        console.log("inserted entry");
        onQueryFinished();
      });
    }
  });
}


module.exports = DiaryQuery;