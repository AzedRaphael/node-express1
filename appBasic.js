let getDateOfBirth = (age)=>{
    let date = new Date()
    let dob = date.getFullYear()
    let yob = dob - age
    console.log(yob)
}

const arrayOfObj = [
    {
        firstName:"raphael",
        age:40,
        complexion: "fair"
    },
    {
        firstName:"sara",
        age:30,
        complexion: "fair"
    },
    {
        firstName:"doda",
        age:21,
        complexion: "black"
    }
]

module.exports = {getDateOfBirth:getDateOfBirth, arrayOfObj:arrayOfObj}