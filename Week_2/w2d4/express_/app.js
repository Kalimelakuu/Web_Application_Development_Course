let express = require('express')
let path = require('path')
let app = express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

let formValues = [];

app.get('/', function(req, res, next){
    console.log("This is the get method")
    res.sendFile(path.join(__dirname, "", '/index.html'))
})

app.get('/secondpage', function(req, res, next){
    console.log("This is the second get method")
    res.sendFile(path.join(__dirname, "", '/secondPage.html'))
})



app.post('/postMethod', function(req, res, next){
    let firstName = req.body.firstName
    let lastName = req.body.lastName;
    let gender = req.body.gender;
    let skills = req.body.skills || []
    let comment = req.body.comment
    formValues.push({firstName, lastName, gender, skills,comment})
    console.log(formValues)
    res.redirect('/')
})

app.get('/form-values', function(req, res, next){
    res.json(formValues)
})


app.listen(3000, ()=>{
    console.log("Server is running on port 8000")
})