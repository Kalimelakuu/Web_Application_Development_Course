let obj1 = {
    number: 1,
    string :'Hello',
    object : {
        firstname:"Kal",
        lastname:"Hailemariam"
    }
}

let string = "This is orgianl string"

function changeString(newString){
    string = newString
    console.log("The change string inside app: " + string)
}
function changeObjValue(objNew){
    obj1 = objNew;
    console.log("The change object inside app: " )
    console.log(obj1)
}
module.exports = {obj1, string , changeString,changeObjValue}