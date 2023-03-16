const express = require("express");
const app = express();
const ejs = require("ejs");
const cookieParse = require("cookie-parser");
const path = require("path");

let score = 100;
app.listen(1200, function (req, res, next) {
  console.log("Server Started");
});

app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "", "index.html"));
  
});
app.get("/ajaxUpdateScore", function (req, res, next) {
   res.send({score})
    
  });

app.post('/ajaxMethod', function(req, res, next){

    if(req.cookies.color && req.cookies.color == 'green'){
        req.cookies.color = 'yellow'
        res.cookie('color', req.cookies.color)
    }else if(req.cookies.color && req.cookies.color == 'yellow'){
        req.cookies.color = 'green'
        res.cookie('color', req.cookies.color)
    }else{
        req.cookies.color = 'green'
        
    }
    res.cookie('color', req.cookies.color)
    res.send(req.cookies)
})


setInterval(() => {
    score += 100;
}, 2000);