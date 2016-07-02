var express = require('express');
var app = express();

app.get("/", function(req, res){
  res.send("Hello World");
}); 

app.get("/charlie", function(req, res){
  res.send("Charlie is a developer");
});

app.get("/node", function(req, res){
  res.send("This is the Node endpoint");
});

app.get("/girls", function(req, res){
  res.send("This is the Girls endpoint");
});

// app.listen is an inbuilt function in node
app.listen(3000, function(){
  console.log('Server is listening on Port:3000. Ready to accept requests.');
});

