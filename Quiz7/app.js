const express = require('express');
const app = express();
const path = require("path")

// var router = require('./router.js')
var ejs = require('ejs')


app.listen(80, () => {
    console.log('Your Server is running on 80');
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// this is the landing page for our index.html page and give it an  object of list with different values
app.get('/', function(req, res, next){
    res.render('index',{list : {

        Personal: {name:'Ram', alias: 'Lakshman', age: 32 },
        
        Preferences: [{ color: 'blue', theme: 'Azure' },
        
        { color: 'yellow', theme: 'Imagination' }]
        
        }})
})

// here we have the post method so that we will give a form value for our preview html page so that it will 
//fetch the values from the req body values

app.post('/post', function(req, res ,next){
    //res.sendFile(path.join(__dirname, './views', 'preview.html'))
    res.render('preview', { form : {
        Name : req.body.name , Alias :req.body.alias , Age : req.body.age
    }

    })
})



