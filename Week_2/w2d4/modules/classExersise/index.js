let app = require('./app')

console.log(app.obj1)
let objNew = app.obj1

let otherNewObj = {a:1}
app.changeObjValue(otherNewObj)

app.changeString("Change the string")
console.log(app.obj1)