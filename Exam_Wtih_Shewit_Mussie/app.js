const express = require('express');
const app = express();
// const cookieParse = require("cookie-parser");
var path = require("path");
var ejs = require("ejs");

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})

// app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', function(req, res, next){
    res.render('index2',  { form2 : {
        Name:"Ram", Courses:{Java:2,Javascript:3},
        Location:"Fairfield",Availability:"Immediate"
        }, form : {
        name: { value: 'Sam', isEdit: false },
        age: { value: 30, isEdit: true }, 
        skills: { value: ['java', 'javascript'], isEdit: true },
        carer : { value : { a: 'software' , b :'doctor'} , isEdit : true}
       
    }});})

  


   
