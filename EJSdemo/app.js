// make a simple ejs demo that will change HTML based on route params

var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.send("you are here");
});

app.get("/persons/:name",function(req,res){
//	var name = req.params["name"];
	res.render("namepage.ejs",{name:req.params.name});
});

app.listen("8008","172.17.0.2",function(){
	console.log("server running");
});
