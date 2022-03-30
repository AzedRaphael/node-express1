const express = require("express");

const router = express.router();

router.get("/", (req,res)=>{
    res.render("index",{
        title: "HomePage"
    })
});

router.listen(5000, ()=>{
    console.log("server listening on port 5000")
})

module.export = router