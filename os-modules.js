const os = require("os")

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
    userInfo: os.userInfo()
}
console.log(`the name of my os is ${currentOs.name}, release date ${currentOs.release} total memeory is ${currentOs.totalMem} ${currentOs.freeMem}. the uptime is ${currentOs.uptime}  and the user information is ${currentOs.userInfo}`)