const express = require("express")

let app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/about", function(req,res){
    res.sendFile(__dirname + "/about.html")
})
//res.send is used to send plain text to the browser
// app.get("/", function(req,res){
//     res.send("this is the homepage")
// });

// app.get("/about", function(req,res){
//     res.send("this is the aboutpage")
// });

app.get("./profile/:id", function(req, res){
    res.send("you requested to view the profile with id of" + req.params.id)
})

app.listen(5000, "127.0.0.1")