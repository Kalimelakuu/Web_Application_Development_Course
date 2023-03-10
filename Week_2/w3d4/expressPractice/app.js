const express = require('express')
const path = require("path");
const app = express()

app.listen(3000, ()=> {
    console.log('server is running on port 3000')
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
// define middleware function
function logger(req, res, next) {
    console.log(new Date(), req.url)
    next()
 }
  
 // calls logger:middleware for each request-response cycle
app.use(logger)
  
app.get('/', function(req, res, next){
    console.log(path.join(__dirname))
    res.sendFile(path.join(__dirname, "" , "/index.html"))
});

app.get('/about', function(req, res, next) {
    console.log(path.join(__dirname))
    res.sendFile(path.join(__dirname, "", "/index.html"))
   
});
let name_Array = []


const formValues = [];

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const fruits = req.body.fruits || [];
  const color = req.body.color;


  let isPresent = false;
  for(let values of formValues){
    if(values.name == name){
        isPresent = true;
    }
  }
  isPresent == false ? formValues.push({ name, email, message , fruits , color }) : '';

  res.redirect('/');
});

app.get('/form-data', (req, res) => {
  res.json(formValues);
});




app.get('/home', function(req,res, next){
    res.write('Hello Page')
    next()
}, function(req, res , next){
    res.write("Hello again")
    res.end()
})