var calculator = require('./calculator')
var cal2 = require('./calculator_two')

var a= 10,b=5;
console.log("From module " + cal2().addFunt(4,5))
console.log("Addition : " + calculator.add(a,b))
console.log("Addition : " + calculator.substract(a,b))
console.log("Addition : " + calculator.multiply(a,b))