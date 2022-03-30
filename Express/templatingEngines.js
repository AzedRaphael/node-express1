const express = require("express");
const path = require("path");
let app = express();
const mongoose = require("mongoose");
const Blog = require("./blog")

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/node-projects",{
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    app.listen(2000)
    //we should listen for request after connection is made to the db
    console.log("database is connected")
}).catch((err)=>{
    console.log(err)
})


let pathProfileEjs = path.join(__dirname, "../views/profile.ejs");
let pathContactEjs = path.join(__dirname, "../views/contact.ejs");
let pathAboutEjs = path.join(__dirname, "../views/about.ejs");
let pathIndexEjs = path.join(__dirname, "../views/index.ejs");
//let pathIndex = path.join(__dirname, "../index.html");
//let pathAbout = path.join(__dirname, "../about.html");

// -------WORKS FOR SENDING HTML FILES TO THE BROWSER-----
// app.get("/", function(req,res) {
//     res.sendFile(pathIndex)
// });
//--------ENDS-----------

//ejs is a template engine that passes data dynamucally from js to rendered html.
app.get("/", function(req,res) {
    res.sendFile(pathIndexEjs)
});

app.get("/add-blog", (req,res)=>{
    const blog = new Blog({
        title:"new blog",
        snippet:"about my new blog",
        body:"more about my nw blog"
    })

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(error)
    })
})
app.get("/contact", function(req,res) {
    res.sendFile(pathContactEjs)
});
app.get("/about", function(req,res) {
    res.render(pathAboutEjs)
})
//res.sendFile renders the path on the browser
app.get("/profile/:name", function(req,res){
    let data = {age:30, job:"software dev", hobbies:["eating", "playing chess", "coding"]}
    res.render(pathProfileEjs, {person: req.params.name, data:data})
})

