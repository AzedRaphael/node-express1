const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
let app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false})
//bodyParser.urlencoded({extended:false}) will parse the post data from form to db

app.set("view engine", "ejs");
//app.engine('ejs', require("ejs").__express)

let pathIndex = path.join(__dirname, "./views/index.ejs");
let pathProfile = path.join(__dirname, "./views/profile.ejs");
//let pathIndex = path.join(__dirname, "../index.html");
let pathAbout = path.join(__dirname, "./views/about.ejs");
let pathContact = path.join(__dirname, "./views/contact.ejs");
let pathContactSuccess = path.join(__dirname, "./views/contact-success.ejs");

//ejs is a template engine that passes data dynamucally from js to rendered html.
// app.get("/", function(req,res) {
//     res.sendFile(pathIndex)
// });
// app.get("/about", function(req,res) {
//     res.sendFile(pathAbout)
// })
//res.sendFile renders the path on the browser
app.get("/", function(req,res) {
    let pageTitle= {title:"Best Node Js App"};
    res.render(pathIndex, {title:pageTitle})
});
app.get("/about", function(req,res) {
    res.render(pathAbout)
});

app.get("/profile/:name", function(req,res){
    let data = {age:30, job:"software dev"}
    res.render(pathProfile, {person: req.params.name, data:data})
})
app.get("/contact", (req,res)=>{
    res.render(pathContact, {qs:req.query})
});
app.post("/contact-success", urlencodedParser, (req,res)=>{
    //urlencodedparser is a middleware that gives us access to what was parsed from the body
    res.render(pathContactSuccess, {data:req.body})
});
app.listen(5000, ()=>{
    console.log("server is working")
})
