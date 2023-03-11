const express = require('express');
// var rootPath = require("../util/path");
var path = require("path");

const router = express.Router();

router.use(function(req, res, next){
    console.log("User Page is Loading")
    next()
})

router.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname,"","test.html"))
})



router.get("/setting",function(req,res,next){
   res.send("This is the User Setting")
})
router.use(function(req, res, next){
    console.log("Please enter your password to change your setting")
    next()
})


module.exports = router;