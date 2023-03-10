let hit = 0;
let data;

let path = require('path')


function homeFunc(req, res , next){
    console.log("This is the home page")
    hit++;
    res.sendFile(path.join(__dirname, "" , "index.html"))
}

function postFunc(req, res , next){
    console.log("This is the postFunc")
    data = req.body
    res.redirect('/bodyresult')
}

function bodyResult(req, res , next){
    let html = "<p> Hist value " + hit + "</p>" 
              + "<p> First Name :  " + data.firstName + "</p>"
              +"<p> Last Name : " + data.lastName + "</p>"
              +"<p> Gender  :" + data.gender + "</p>"
              +"<p> Skills  :" + data.skills + "</p>"
              +"<p> Comment :  " + data.comment + "</p>";
    res.send(html)
}


module.exports = {homeFunc,postFunc,bodyResult }