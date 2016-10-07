var DiaryQuery = require('../db/diary_query');

var DiaryApi = function(app){
  var query = new DiaryQuery();

  app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });

  app.get('/api/diary', function(req, res){
    query.getAll(function(data){
      res.json(data);
    });
  });

  app.post('/api/diary', function(req,res){
    query.createEntry(req.body.diary, function(){
      query.getAll(function(data){
        res.json(data)
      });
    });
  });
} 

module.exports = DiaryApi;