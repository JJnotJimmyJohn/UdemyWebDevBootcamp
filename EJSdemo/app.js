// make a simple ejs demo that will change HTML based on route params

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req,res){
	res.send("you are here");
});

app.get("/posts",function(req,res){
	var posts = [
		{title:"i'm switching from PyCharm to VS Code", author:"JJ"},
		{title:"today it rained again.", author:"Jian"},
		{title:"my shoulder hurts a little",author:"JiJi"}
	];
	res.render("posts.ejs",{posts:posts});
})

app.get("/persons/:name",function(req,res){
//	var name = req.params["name"];
	res.render("namepage.ejs",{name:req.params.name});
	console.log("namepage is visited");
});

app.listen("8008","172.17.0.2",function(){
	console.log("server running");
});
