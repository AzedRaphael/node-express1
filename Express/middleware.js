//middleware are fxns that executes during a request to server. middleware fxn has access to...
//request and response parameter. it sits between req and res. express passes req, res and next to mw.
//middleware passes information from req to res.
const express = require('express');
const app = express();
const {logger} = require("./data.js")

app.use(logger);
//instead of manually passing in the logger middleware fxn in theget methods, app.use(logger) makes it a lot easier.
//app.use invokes in order for every app.get method.

//app.use("/api", logger)
//this will work for only api related links nothing else.

app.get("/",(req,res)=>{
    res.send("<h1>Home page</h1>")
});

app.get("/about",(req,res)=>{
    res.send("About Page")
});

app.get("/api/products",(req,res)=>{
    res.send("About Page")
});

app.get("/contacts",(req,res)=>{
    res.send("About Page")
});

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
});