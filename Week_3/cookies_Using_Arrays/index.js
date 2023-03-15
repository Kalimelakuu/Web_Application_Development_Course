let express = require("express");
let path = require("path");
let user = express.Router();



app.use(cookieParse())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


user.get("/", function (req, res, next) {
    
  res.send('');
});