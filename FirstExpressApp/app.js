var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there really");
});

app.get("/:name/:gender/yourpage",function(req,res){
	res.send("this is your page!!!")
	console.log(req.params);

})

app.get("*", function(req, res){
	res.send("I'm guessing you are lost...");
});

app.listen(8008,"172.17.0.2",function(){
	console.log("Server running")
});

