const express = require('express');
var path = require("path");
const router = express.Router();

router.get("/",function(req,res,next){
    res.render("index");
})

router.post("/update",function(req,res,next){
    res.sendFile(path.join(__dirname,"index.html"))
})

router.post("/show",function(req,res,next){
    res.sendFile(path.join(__dirname,"index.html"))
})
module.exports = router;
