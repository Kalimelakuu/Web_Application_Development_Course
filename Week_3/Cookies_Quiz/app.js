const express = require("express")
const cookie = require('cookie-parser')

const app = express()



app.use(cookie())
app.use(express.urlencoded({extended : false}))



app.get('/', function(req, res, next){
    // Setting in cooking res.cookie("key","value")

    // res.cookie("Strings", "Hello World")
    // res.cookie("Integers", 100)
    // res.cookie("Booleans", true)
    // res.cookie("Arrays", [1,2])
    // res.cookie("Objects", {A:1, B:2})


    res.cookie('Hitcount', 0);
   // res.send("Succesfull")
    res.send(`<form  method ="post" action ="/addValue"> 
                   Name : <input  type="text"/>
                   <br><br>
                   Password : <input type="text" >
                   <br><br>
                  <input type="submit" value = "Login" />
             </form>`)
})




app.post('/change', function(req, res , next){
   

    req.cookies.Strings = "Change Hello World"  // update string
    req.cookies.Integers = 300; // update integer
    req.cookies.Booleans = false /// update boolean
    req.cookies.Arrays = ["A" ,"B"]// to update the array we need to first assign it to a variable 
   

    req.cookies.Objects = {"Kali": 1, "Haile" : 2}

    req.cookies.Hitcount = parseInt(req.cookies.Hitcount) + 1;// Number of visited page


    res.cookie("Hitcount", req.cookies.Hitcount)
    res.cookie("Strings", req.cookies.Strings)
    res.cookie("Integers", req.cookies.Integers)
    res.cookie("Booleans", req.cookies.Booleans)
    res.cookie("Arrays", req.cookies.Arrays)
    res.cookie("Objects", req.cookies.Objects)

    console.log(req.cookies.Hitcount)
    
    res.send("Increament")
})

app.post('/addValue', function(req, res , next){
   

   
    req.cookies.Strings == undefined ? req.cookies.Strings = "Hey I am new " : req.cookies.Strings = req.cookies.Strings + "I am the extention"  // update string
    req.cookies.Integers == null ? req.cookies.Integers = 200 : req.cookies.Integers = parseInt(req.cookies.Integers) + 300;; // update integer
   
    req.cookies.Arrays == null ? req.cookies.Arrays = [1] : req.cookies.Arrays = req.cookies.Arrays // to update the array we need to first assign it to a variable 
    req.cookies.Arrays.push(3) // then push it to that variable

    req.cookies.Objects == null ?req.cookies.Objects = {A: "I am the first"} : req.cookies.Objects = req.cookies.Objects
    req.cookies.Objects.B = "I'm updated form 1 to string"

    req.cookies.Hitcount = parseInt(req.cookies.Hitcount) + 1;// Number of visited page


    res.cookie("Hitcount", req.cookies.Hitcount)
    res.cookie("Strings", req.cookies.Strings)
    res.cookie("Integers", req.cookies.Integers)
    // res.cookie("Booleans", req.cookies.Booleans)
    res.cookie("Arrays", req.cookies.Arrays)
    res.cookie("Objects", req.cookies.Objects)

    console.log(req.cookies.Hitcount)
    
    res.send("Increament")
})


app.listen(3000, function(req, res, next){
    console.log("Server started")
})