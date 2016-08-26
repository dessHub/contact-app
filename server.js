var express = require ('express');
var app = express();

app.get('/', function(req, res){
  res.send("im a geeek!!!");
});

app.listen(3030);
console.log("server starts at port 3030");
