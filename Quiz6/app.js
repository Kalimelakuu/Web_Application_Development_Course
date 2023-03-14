const express = require('express');
const app = express();
const path = require("path");
const user = require('./user')

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', user)


app.listen(80, () => {
    console.log('Your Server is running on 80');
})





