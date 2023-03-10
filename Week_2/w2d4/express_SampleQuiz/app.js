const { urlencoded } = require('express')
let express = require('express')
let app = express()

let helper = require('./helper')


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', helper.homeFunc)

app.post('/postMethod', helper.postFunc)

app.get('/bodyresult', helper.bodyResult)

app.listen(8000, ()=> {
    console.log("Server running in port 8000")
})