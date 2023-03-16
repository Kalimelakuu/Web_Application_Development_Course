const express = require('express');
const app = express();
var router = require('./routes')
var path = require("path")
var ejs = require("ejs")
app.listen(80, () => {
    console.log('Your Server is running on 80');
})

app.use('/img', express.static(path.join(__dirname, 'public', 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use("/",router);