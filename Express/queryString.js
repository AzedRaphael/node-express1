//url or queryString is a way to send small amount of info to the serverusing url
//it is used to query or filter a database.

const express = require("express");
const {data} = require("./data");
const path = require("path")

const pathHome = path.resolve(__dirname, "../index.html");
const app = express()

app.get("/", (req,res)=>{
    res.status(200).sendFile(pathHome)
});

app.get("/api/data",(req,res)=>{
    const {dataID} = req.params
    const filteredData = data.find(item => item.id === Number(dataID))
    if(!filteredData){
        return res.status(404).send("data does not exist")
    }
   return res.json(filteredData)
});

app.get("/api/data/query", (req,res)=>{
    const {search, limit} = req.query;
    let sortedItems = [...data]
    if(search){
        sortedItems = sortedItems.filter(product =>{
            return product.name.startsWith(search)
        })
    };
    if(limit){
        sortedItems = sortedItems.slice(0, Number(limit))
    };
    res.status(200).json(sortedItems)
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})