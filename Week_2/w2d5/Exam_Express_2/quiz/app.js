const express = require('express');
const app = express();
var router = require('./routes')
app.listen(80, () => {
    console.log('Your Server is running on 3000');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",router);