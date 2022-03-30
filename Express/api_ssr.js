//api is an http interface to interact with our data(json) for request and res.json() to the user.

// server side rendering(ssr) renders a template

const express = require("express");
const app = express();
const {data} = require("./data")

app.get("/",(req,res)=>{
   res.send("<h1>Home Page</h1>")
});

app.get("/api/data", (req,res)=>{
    const newData = data.map(item=>{
        const {gender,name,location,login,email,dob,phone,cell,id,registered,picture,nat} = item;
        return {gender,name,location,login,email,dob,phone,cell,id,registered,picture,nat}
    })
    res.send(newData)
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})