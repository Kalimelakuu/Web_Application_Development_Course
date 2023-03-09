console.log("*********************(This function in and out side of objcect)*********************************************")

// if 'this' key word is only in function it will implies to global function
function foo(){
    console.log(this)
}

foo()
// if 'this' key word is  in function and in object it will implies to nearest objcet function
const bob = {
    log: function(){
        console.log(this)
    },
    name:'this'
}
bob.log()

console.log(this)

console.log("*********************(This.varable name)*********************************************")

// if the varable is not in global this will assign the varable to global and the varabile can be accessed everywhere
function sam(){
    this.newVar = 'Hello'
}
//console.log(newVar)
sam()
console.log(newVar)

console.log("*********************(This in func and inner func)*********************************************")

var a = {
  name: "",
  age: 33,
  log: function () {
    // this implies for the object of its lexical scope
    
    console.log("Outside inner function : " + this);
    this.name = "Hello"
    
    console.log("Outside inner : " + this.name); // Hello
    var setFrench = function (newname) {
      //  in Inner functions this will implies to global not to its inner objcet
      this.name = newname;
      console.log("Inside inner : " + this.name);
      console.log("Inside inner : " + this.age); // ""
      console.log("Inside inner : " + this);
    };
    setFrench("Bonjour");
    console.log(this.name);
  },
};

a.log();
// ******************************************************************

var a = {
  name: "",
  age: 33,
  log: function () {
    // this implies for the object of its lexical scope
    console.log("Outside inner : " + this.name);
    console.log("Outside inner : " + this);
    // this self means that this objcet so using self in inner object we obliged the inner function to implies to the objcet
    var self = this;
    (this.name = "Hello"), console.log("Outside inner : " + this.name); // Hello
    var setFrench = function (newname) {
      // Inner functions
      self.name = newname;
      console.log("Inside inner : " + self.name);
      console.log("Inside inner : " + self.age); // ""
      console.log("Inside inner : " + self);
    };
    setFrench("Bonjour");
    console.log(this.name);
  },
};

a.log();


console.log(
  "**************************(Arrow function solve inner function problem)****************************************"
);
const a3 = {
  name: "",
  log: function () {
    (this.name = "Hello"), console.log(this.name);
    // this arrow function inside a function and object implies to the nearest object so it solve the use of self in inner fucntions
    const setFrence = (newName) => (this.name = name);
    setFrence("Bonjour");
    console.log(this.name);
  },
};
a3.log();


console.log( "**************************(Other Examples)****************************************");
const me = {
  first: "Tina",
  last: "Xing",
  getFullName: function () {
    // this implies the keys inside the object
    return this.first + " " + this.last;
  },
  logs: function (height, weight) {
    console.log(this.getFullName() + " " + height + " " + weight);
  },
};
console.log(me.logs(40, 50));

const log = function (height, weight) {
  console.log(this.getFullName() + height + weight);
};

console.log( "**************************(Other Examples Two)****************************************");
var fname = "kal";
function makeUser() {
  return {
    fname: "John",
    ref: this,
  };
}

let user = makeUser();

console.log("this question " + user.ref);

// this outside a function is {} empty object
console.log(this);

console.log( "**************************(Other Examples Three)****************************************");

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user1 = makeUser();

console.log(user1.ref().name);

console.log(this);


console.log( "**************************(Other Examples Four)****************************************");

let obj = {
  a: function () {
    // this implies about the object
    return this;
  },
};
// here this is not in function even if it is in side an object so it will return noting
let obj2 = { a: this };

console.log(obj.a());
console.log(obj2.a());



console.log(
  " **************************Global this****************************************"
);

// becuse if this is in function and not inside an objcet it will implies the global
function globalThis() {
  console.log(this);
}
console.log(globalThis());

console.log(
  " **************************arrow this****************************************"
);

// if it is an arrow out side a function and an object it {}
let arrow = () => console.log("Inside arrow ", this);
arrow();

let objArrow = {
  a: 1,
  // be is an arrow function but even if it is in side an object it is not inside afuction so it is {}
  b: () => console.log("B Inside Object arrow ", this),
  // this is a named f function in this "this" implies the object
  f: function () {
    return this;
  },
};

objArrow.b();

arrowarray();
console.log(objArrow.f());

console.log('************************INNER******************************************')
let innerFun = {
  b: 1,
  c: 2,
  d: function () {
    let arrow = () => console.log("Inside inner arrow", this); // innerfunc
    let innerFn = function () {
      console.log("Inside inner Function", this); //global
    };
    arrow();
    innerFn();
  },
};
innerFun.d();


console.log('************************(this is bind to its context)******************************************')
function getThis(){
    return this;
}

const obj1= {name: 'obj1'}
const obj2= {name: 'obj2'}

// this is assigened to the obj1
obj1.getThis = getThis;
// this is assigened to the obj1
obj2.getThis = getThis;


console.log(obj1.getThis())

console.log(obj1.getThis())
