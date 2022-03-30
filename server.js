const fs = require("fs")
const path = require('path')

const pathFile = path.join(__dirname, "./files/two.txt")
let readPathFile = fs.readFileSync(pathFile, "utf-8")
console.log(readPathFile)

const writePathFile = path.join(__dirname, "./files/One.txt")
let writeFile = fs.writeFileSync(writePathFile, "hey new file")

let readFile = fs.readFileSync(writePathFile, "utf-8")
console.log(readFile)