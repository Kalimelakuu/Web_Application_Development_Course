console.log("*************************(CALL)******************************");

//  • .call() or .apply() when you want to invoke the function immediately and modify the context.
// function sayHello() {
//   return "Hello " + this.name;
// }

// var obj = { name: "Sandy" };

// console.log(obj);
// console.log(sayHello.call(obj));

// var person = {
//   age: 23,
//   getAge: function () {
//     return this.age;
//   },
// };
// var person2 = { age: 54 };
// console.log(person.getAge.call(person2));

// function saySomething(message) {
//   return this.name + " is " + message;
// }
// var person4 = { name: "John" };
// console.log(saySomething.call(person4, "awesome"));

console.log("*************************(APPLY)******************************");

function sayHello() {
  return "Hello " + this.name;
}

var obj = { name: "Sandy" };

console.log(obj);
console.log(sayHello.apply(obj));

var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 54 };
console.log(person.getAge.apply(person2));

function saySomething(message) {
  return this.name + " is " + message;
}
var person4 = { name: "John" };
console.log(saySomething.call(person4, "awesome"));

// example 2

var me1 = {
  first: "Tina",
  last: "Xing",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
var you = {
  first: "Rujuan",
  last: "Xing",
};
const you1 = me1.getFullName.bind(you);
console.log( "=>"+ me1.getFullName.bind(you)());
console.log(me1.getFullName.call(you));
console.log(me1.getFullName.apply(you));

console.log(
  "**********************************(BIND)******************************************"
);
var bikeDetails = {
  displayDetails: function (registrationNumber, brandName) {
    return (
      this.name +
      " , " +
      "bike details: " +
      registrationNumber +
      " , " +
      brandName
    );
  },
};

var person1 = { name: "Vivek" };

var detailsOfPerson1 = bikeDetails.displayDetails.bind(
  person1,
  "TS0122",
  "Bullet"
);

// Binds the displayDetails function to the person1 object

detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet

const me = {
  first: "Tina",
  last: "Xing",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};

const log = function (height, weight) {
  // ‘this’ refers to the invoker
  console.log(this.getFullName() + height + " " + weight);
};

const logMe = log.bind(me, "180cm", "71kg");

logMe(); // Tina Xing 180cm 70kg
log.call(me, "180cm", "72kg"); // Tina Xing 180cm 70kg
log.apply(me, ["180cm", "73kg"]); // Tina Xing 180cm 70kg

function multiply(a, b) {
  return a * b; //no usage of ‘this’
}
const multipleByTwo = multiply.bind(null, 2); // set a = 2
console.log(multipleByTwo(4)); // 8

const multipleByThree = multiply.bind(null, 3); // set a = 3
console.log(multipleByThree(4)); // 12

const multipleByFour = multiply.bind(null ,5, 3); // set a = 3
console.log(multipleByFour()); // 15
