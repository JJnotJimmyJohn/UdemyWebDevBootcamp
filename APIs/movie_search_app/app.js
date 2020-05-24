var express = require("express");
var request = require("request")
var app = express();

var bodyParser = require("body-parser");

// we need this to get req.body
app.use(bodyParser.urlencoded({extended:true}));



// function searchMovie(movieName){
//     var searchURL = "http://www.omdbapi.com/?s="+movieName+"&apikey=thewdb";
//     var parsedData;
//     request(searchURL,function(error,response,body){
//         if (error) {
//             console.log('something went wrong!');
//             console.log(error);
//         } else {
//            if (response.statusCode==200) {
//                parsedData = JSON.parse(body);
//                console.log("results back");
//             //    console.log(parsedData);
//                return parsedData;
//            } 
//         }
//     });
    
// };

// app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

var results="";

app.post("/search",function(req,res){
    var movieName = req.body.movieName;
    console.log("you searched for "+movieName);
    var searchURL = "http://www.omdbapi.com/?s="+movieName+"&apikey=thewdb";

    request(searchURL,function(error,response,body){
        if (!error && response.statusCode==200) {
            results = JSON.parse(body);
            res.redirect("/results");
        } 
    });
    // res.redirect("/");
});

app.get("/results",function(req,res){
    res.send(results["Search"][0]);
});


app.listen("8008","172.17.0.2",function(){
	console.log("server running");
});