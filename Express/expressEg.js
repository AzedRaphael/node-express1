const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.status(200).send("this is the home page")
});

app.get("/about", function(req,res){
    res.status(200).send("ABOUT PAGE")
});
app.all("*", function(req,res){
    res.status(404).send("<h1>Resource not found</h1>")
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})