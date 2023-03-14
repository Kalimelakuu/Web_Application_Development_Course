let express = require("express");
let path = require("path");
let user = express.Router();
let userFile = require('./history')

let data;
user.get("/", function (req, res, next) {
    
  res.sendFile(path.join(__dirname, "./html", "index.html"));
});



user.post("/postMethod", function (req, res, next) {
  if (Number.parseInt(req.body.numbers) == Number(req.body.numbers)) {
    if (
      (req.body.numbers % 2 == 0 && req.body.OddOrEven == "odd") ||
      (req.body.numbers % 2 != 0 && req.body.OddOrEven == "even")
    ) {
       
        res.sendFile(path.join(__dirname,"./html",'error.html'))
     
    } else {
      data = req.body
      userFile.push( " " + req.body.numbers + " : " + req.body.OddOrEven + "  ")
      res.send(userFile);
    }
  } else {
    res.redirect("back");
  }
});

user.get('/userData', function(req, res, next){
    res.json(userFile)
})

module.exports = user;


