const express = require('express')
const app = express()
const ejs = require('ejs')
const cookieParse = require("cookie-parser")
const path = require("path")


app.listen(12, function(req, res, next){
    console.log("Server Started")
})

app.use(cookieParse())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", function(req, res, next){
    res.cookie("x",1)
    res.cookie("y","Hello")
    res.cookie('z', {a:3})
    res.send("TEST <form action='/' method='post'><input type='submit' /></form>")
})


app.post('/' ,function(req, res, next){
    console.log(req.cookies)

    req.cookies.x = parseInt(req.cookies.x )+ 1
    req.cookies.y = ' The Value is changed'
    req.cookies.z.a = 5
    
    console.log(req.cookies.x )
    console.log(req.cookies.y )
    console.log(req.cookies.z.a )

    res.cookie("x",req.cookies.x)
    res.cookie("y",req.cookies.y)
    res.cookie("z",req.cookies.z)
    res.send("Data")
})