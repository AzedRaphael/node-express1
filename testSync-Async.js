// SYNC TESTS
const {readFileSync, writeFileSync, writeFile, readFile} = require("fs")

writeFileSync("./files/text.txt", "hello i created this text file. i know its text not test")
writeFileSync("./files/text.txt", " and I appended this to existing text.", {flag:"a"})

const firstRead= readFileSync("./files/One.txt", "utf-8", )
console.log(firstRead)

//ASYNC TESTS
writeFile("./files/test.txt", "this is for test file", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

readFile("./files/text.txt", "utf-8", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})