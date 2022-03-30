const express = require("express")
//express variable holds the express modules. 
let app = express();
//app is set to the express function returned from the express module.
app.get("/", function(req,res){
    res.send("this is the home pagee")
});

app.get("/contact", function(req,res){
    res.send("this is contact page")
})
//app.get gets info from the user which is the route("/contact") then sends the res to the browser.

app.get("/profile/:id", function(req,res) {
    res.send("You requested to see a profile with the id of " + req.params.id)
})
//the profile id may correspond to an id in the database and returned as html to the browser.

app.listen(5000,()=>{
    console.log("server is working")
})