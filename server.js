var express = require('express');
var app = express();
app.use(express.static("public"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var fs = require('fs');

app.post("/create-post", function(req, res){
  // console.log("/create-post");
  console.log(req.body);
    fs.writeFile('data/posts.json', req.body.blogpost, function(err){
    console.log(err);
  });
  res.redirect('/');
});

// app.listen is an inbuilt function in node
app.listen(3000, function(){
  console.log('Server is listening on Port:3000. Ready to accept requests.');
});

