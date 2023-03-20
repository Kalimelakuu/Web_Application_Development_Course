const express = require('express');
const app = express();

var path = require("path")
var ejs = require("ejs")
var cookie = require('cookie-parser')



app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', function(req, res , next){

    // here we set a cookie with key  of "Timer" and value of 0
    res.cookie('Timer', 0)
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/postMethod', function(req, res , next){
    
    

    let inputValue = req.body.myInput;

    // if we get the input value of 'wap' we will set the timer to 0 , and send status of Sucess
    if(inputValue == 'wap' ){
        res.cookie("Timer",0 )
        res.send({status : 'Sucess!', color : 'green'})
    }else if(parseInt(req.cookies.Timer) < 3){
      // if we get the input value of different that 'wap' we will set the timer to increase by 1 , and send status of Sucess
        req.cookies.Timer = parseInt(req.cookies.Timer) + 1;
        res.cookie("Timer",req.cookies.Timer )
        res.send({status : 'Incorrect Input Try Again' , color: 'blue', timer: req.cookies.Timer})

    }else if(parseInt(req.cookies.Timer) == 3){
        // // if the timer is 3 , we set the cookie of timer to value 0 and send status of 'Account Locked '
         res.cookie('Timer', 0)
         res.send({status : 'Account Locked for', color : 'orange', timer : req.cookies.Timer })
    }
    
})

app.listen(80, () => {
    console.log('Your Server is running on 80');
})