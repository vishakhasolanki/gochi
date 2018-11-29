var express = require("express"),
	app		= express();

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home")
});

app.get("/about",function(req,res){
	res.render("about")
});

app.listen(9999,function(){
	console.log("Started 6e yaar!!");
});