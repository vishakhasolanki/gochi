var express = require("express"),
	app		= express(),
    port = process.env.PORT || 3000;

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home")
});

app.get("/about",function(req,res){
	res.render("about")
});

app.listen(port,function(){
	console.log("Started 6e yaar!!");
});