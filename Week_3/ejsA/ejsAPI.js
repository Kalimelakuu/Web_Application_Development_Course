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
// app.set('views', path.join(__dirname,"myDir"));

// app.get("/admin", function (req, res, next) {
//     res.render("index", { list: ["apple", "banana"] })
// });

let myTabel = {color:['color','blue'],flowers:['rose','tulip']}
let form = { name: 'Ram', age: '30', skills: ['java', 'javascript'] ,selectedSkill:'java'}


app.get("/admin", function (req, res, next) {
    res.render("index", {form : { name: 'Ram', age: '30', skills: ['java', 'javascript'] ,selectedSkill:'javascript'}})
});