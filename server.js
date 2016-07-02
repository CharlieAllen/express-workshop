var express = require('express');
var app = express();
app.use(express.static("public"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var fs = require('fs');

app.get("/show-posts", function(req, res){
  console.log("/show-posts");
  fs.readFile(__dirname + '/data/posts.json', function(err, file){
    console.log(file.toString()); 
    var parsedFile = JSON.parse(file);
    res.send(parsedFile);
  });
});

app.post("/create-post", function(req, res){
  // console.log("/create-post");
  console.log(req.body);
    fs.writeFile(__dirname + '/data/posts.json', req.body.blogpost, function(err){
    //console.log(err);
    });
  res.redirect('/');
});

// app.listen is an inbuilt function in node
app.listen(3000, function(){
  console.log('Server is listening on Port:3000. Ready to accept requests.');
});

