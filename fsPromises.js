const fs = require("fs")
const path = require("path")

// const pathToWrite = path

fs.promises.mkdir("newFile")
    .then(()=>{
        console.log("the file was created")
    })
    .catch(err=>{
        console.log(err)
    })

fs.promises
    .appendFile("newFile/One.txt", "new file creaed with promises")
    .then(()=>{
        console.log(`a new file has been created`)
    })
    .catch(err=>{
        console.log(err)
    })