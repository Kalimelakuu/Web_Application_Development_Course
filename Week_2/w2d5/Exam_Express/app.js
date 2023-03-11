
let hitCount=0;
let data;
var path = require("path")
function home(req,res,next){
    console.log(" Here in landing")
    hitCount++;
    res.sendFile(path.join(__dirname,'index.html'))
}
function preview(req,res,next){
   
    console.log(data)
    let html = 
    "<p> Hits:"+hitCount+"</p>"+
    "<p>Name:"+ data.treeName+"</p>"+
    "<p>Type:"+ data.plantType+"</p>"+
    "<p>Color:"+ data.category+"</p>";

    res.send(html);
}

function postFn(req,res,next){
    console.log(" Post fn ")
    data = req.body;
   res.redirect("/preview")
}
module.exports ={getFn:home,viewFn:preview,postFn:postFn};
