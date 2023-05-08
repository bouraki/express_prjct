const express = require('express')
const app = express()
const today = new Date()
const time = today.getHours() 
const day = today.getDay()
console.log(day)


const port = 3005

const server = app.listen(port,()=>{
    console.log('server listening on port %d', port)
})



const checkTime = (req, res,next)=>{
    if(9 > time > 17 && 1 <= day <= 5){
        return next()
    }
    return res.status(401).json('not working')
}

app.use('/',checkTime,(req, res, next) =>{
    console.log('heloo')
    res.status(200).json('working')
})