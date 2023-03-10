let express = require("express");
const path = require("path");
let app = express();

app.listen(8000, () => {
  console.log("server started");
});

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
  res.send("Welcome ");
});



app.get('/admin', function(req,res ,next){
    console.log("This is the Admin")
    res.sendFile(path.join(__dirname, "", "index.html"))
})

app.post('/postmethod', function(req, res, next){
    console.log(req.body.mname  )
    res.redirect('back')
})

app.get("/view", function (req, res, next) {
    console.log('In the view');
    res.send(" My View")
});

app.get('/home', function(req, res, next) {
    console.log(path.join(__dirname))
    res.sendFile(path.join(__dirname, "", "index.html"))
   
});