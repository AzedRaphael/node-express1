const fs = require("fs")
const path = require("path")
const http = require("http")

const readAsync =  async()=>{
    try {
        const pathOne = path.join(__dirname, "./files/newWrite.txt")
        const readFile1 = await fs.readFileSync(pathOne, "utf-8")
        const readFile2 = await fs.readFileSync("./files/three.txt", "utf-8")
        
        console.log(readFile1)
        console.log(readFile2)
        // return(
        //     <>
        //         {readFile1}
        //         {readFile2}
        //     </>
        // )
    } catch (error) {
       console.log(error) 
    }
}

readAsync()