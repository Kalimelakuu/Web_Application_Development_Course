const express = require('express');
const { fstat } = require('fs');
const app = express();
var path = require("path");
var router = require("./app")

app.listen(80, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
app.use(express.json());
app.use(function(req,res,next){
    
    if(req.query.user && req.query.user=='guest')
        res.send("403");
    else
        next();
})

app.get('/',router.getFn)

app.post('/post',router.postFn)
app.get('/preview',router.viewFn);
