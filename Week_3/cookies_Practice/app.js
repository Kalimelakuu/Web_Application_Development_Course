const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()



app.use(cookieParser())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res, next) => {
    //res.cookie('remember', 1)
    if(req.cookies.remember){
        res.send("Remebered : ) Click to <a href='/forget'>Forget</a>")
    } else{
       
        res.send(`<form action="/pMethod" method ="post"   >
         <label>
         <input type="checkbox"  name="remeber">
         </label>
         <input type="submit"  value="Submit">

        </form>`)
    }
})

app.post('/pMethod' , function(req, res, next){
   
    if(req.body.remember){
        res.cookie('Remember',2)
        res.send("Hey")

    }else{
        res.redirect('back')
    }
})
app.get('/forget', (req, res)=> {
    res.clearCookie('remember')
    res.redirect('back')
})
app.listen(3000, function(req, res, next){
    console.log("Server is running on port 3000")
})