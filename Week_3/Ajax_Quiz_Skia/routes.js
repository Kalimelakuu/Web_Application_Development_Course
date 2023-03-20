const express = require('express');
var path = require("path");
const router = express.Router();

let weatherSources =["AccuWeatherAPI","VisualCrossingAPI"];


router.get("/",function(req,res,next){
    res.cookie("AccuWeatherAPI", 0)
    res.cookie("VisualCrossingAPI", 0)
    
    res.render("index");
})




router.post("/update",function(req,res,next){
    
    let selectedWeather = req.body.weathers
    let weatherInput = parseInt(req.body.myInput)
  

    if(weatherSources[0] == selectedWeather ){
        res.cookie("AccuWeatherAPI", weatherInput)
    }else {
        res.cookie("VisualCrossingAPI", weatherInput)
    }
    let average = (parseInt(req.cookies.AccuWeatherAPI) + (parseInt(req.cookies.VisualCrossingAPI)))/2;
    res.send({average})
    
    
})

 

router.post("/show",function(req,res,next){
    res.sendFile(path.join(__dirname,"index.html"))
})
module.exports = router;
