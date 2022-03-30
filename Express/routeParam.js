const express = require("express");
const app = express();
const {data} = require("./data")

app.get("/", (req,res)=>{
    res.send("<h1>Home Page</h1>")
});

app.get("/api/data", (req,res)=>{
    const newData = data.map(item=>{
        const {gender,name,location,login,email,dob,phone,cell,id,registered,picture,nat} = item;
        return {gender,name,location,login,email,dob,phone,cell,id,registered,picture,nat}
    });
res.send(newData)
});

app.get("/api/data/:dataID", (req,res)=>{
    const {dataID} = req.params;
       
    const singleData = data.find(item=>item.id === Number(dataID));
    if(!singleData){
         return res.status(404).send("data does not exist")
     }
    return res.json(singleData)
});

app.get("/api/data/:dataID/reviews/:reviewID", (req,res)=>{
        res.send("hello world")
});

app.listen(5000, ()=>{
    console.log("server listening on port 5000")
});

