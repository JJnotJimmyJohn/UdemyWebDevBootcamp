var express = require("express");
var app = express();

var bodyParser = require("body-parser");

// we need this to get req.body
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

var friends = ["Tony","Miranda","Justin","Pierre","Lily"];

app.get("/",function(req,res){
    res.render("home");
});


app.get("/friends",function(req,res){
    res.render("friends",{friends:friends});
});

app.post("/addfriend",function(req,res){
    console.log(req)
    var newFriend = req.body["newfriend"];
    friends.push(newFriend);
    // res.send("you reached post route");
    res.redirect("/friends");

    // get the data use posted
    //change your friends array
    //redirect to friends page
    //my question is, when you redirect to friends page
    // doesn't your variable got over written?
});


app.listen(8008,function(){
    console.log("server listening")
});