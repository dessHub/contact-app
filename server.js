var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('contactsdb',['contactsdb']);


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contacts', function(req, res){
  console.log("i  received a get request");
  db.contactsdb.find(function(err, docs){

    res.json(docs);
  })

});

app.post('/contacts', function(req, res){
  db.contactsdb.insert(req.body, function(err, docs){
    res.json(docs);
  });
});

app.delete('/contacts/:id', function(req, res){
   var id = req.params.id;
  db.contactsdb.remove({_id: mongojs.ObjectId(id)},function(err, doc){
    console.log(id);
    res.json(doc);
  });
});

app.get('/contacts/:id', function(req, res){
  var id = req.params.id;
  db.contactsdb.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.put('/contacts/:id', function(req, res){
  var id = req.params.id;
  db.contactsdb.findAndModify({Query: {_id: mongojs.ObjectId(id)},
  update : {$set: {
    name : req.body.name,
    email : req.body.email,
    contact : req.body.contact
  }}, new: true}, function (err, doc){
    console.log(doc);
    res.json(doc);
  });
});

app.listen(3030);
console.log("server starts at port 3030");
