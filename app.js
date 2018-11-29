var express = require("express"),
	app		= express();

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home")
});

app.get("/",function(req,res){
	res.render("about")
});

app.listen(8999,function(){
	console.log("Started!!");
});