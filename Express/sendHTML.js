const express = require('express');
const app = express();
const path = require("path");

app.use("/public",express.static("../public"));

//const pathHome = path.join(__dirname, "../index.html");
const pathHome = path.resolve(__dirname, "../index.html");
const pathAbout = path.join(__dirname, "../about.html");
const pathContact = path.join(__dirname, "../contact.html");
const pathBlog = path.join(__dirname, "../blog.html");

app.get("/", function(req,res){
    res.sendFile(pathHome)
});

app.get("/about", function(req,res){
    res.sendFile(pathAbout)
});

app.get("/blog", function(req,res){
    res.sendFile(pathBlog)
});

app.get("/contact", function(req,res){
    res.sendFile(pathContact)
});

app.all("*", function(res,res){
    res.status(404).send("<h1>Resource Not Found</h1>")
});

app.listen(5000, ()=>{
    console.log("serve is listening on port 5000")
})