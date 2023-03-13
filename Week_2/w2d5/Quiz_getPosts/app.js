const express = require("express")
const app = express();
const path= require('path')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
let data;

// path
app.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname,"", 'exam.html'))
})
app.post('/post', function(req, res, next){
    data = req.body
    res.redirect('/preview')
})

app.get('/preview', function(req, res, next){
    res.send(data.name + data.age)
})
app.listen(3000, function(req, res, next){
    console.log("Server is runnig in 3000")
})