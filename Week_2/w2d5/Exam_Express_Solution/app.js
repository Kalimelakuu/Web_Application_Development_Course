const express = require('express');
const app = express();
var path = require("path");

let myArray = {
    guest: ['Nuts', "Seeds"],
    owner: ['Vegetables', 'Nuts', 'Fruits', "Seeds"]
};
let loggedUser;
let userHasAccess = false;
let category;

app.listen(80, () => {
    console.log('Your Server is running on 80');
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, "login.html"))
})

app.post('/login', function (req, res, next) {
    loggedUser = req.body.username;
    if ((req.body.username == 'guest' && req.body.password == 'guest')
        ||
        (req.body.username == 'owner' && req.body.password == 'owner'))
        res.sendFile(path.join(__dirname, "view.html"))
    else
        throw new Error("Login Not Success")
})

app.post('/selectCategory', (req, res, next) => {
    userHasAccess = myArray[loggedUser].indexOf(req.body.category)>=0;
    category = req.body.category;
    next();
}, function (req, res, next) {
    if (userHasAccess)
        res.send(" Welcome to "+category)
        res.send("Unauthorized")
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.use((error,req, res, next) => {
    res.send(" ERROR")
});

