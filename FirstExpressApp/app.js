var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there really");
});

app.listen(8008,"172.17.0.2",function(){
	console.log("Server running")
});
