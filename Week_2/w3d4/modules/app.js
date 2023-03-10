let obj1 = {
    number: 1,
    string :'Hello',
    object : {
        firstname:"Kal",
        lastname:"Hailemariam"
    }
}

let string = "This is orgianl string"

function changeValue(newString){
    string = newString
    console.log(string)
}

module.exports = {obj1, string , changeValue}