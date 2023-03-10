console.log("**************************(PLEASE RUN EACH CODE SEPARTELY)************************************")
console.log(
  "**********************(CALLING AN INNER FUNCTION)**********************************"
);

function init() {
  //function declaration
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

function makeFunc() {
  const name = "Mozilla"; //local to makeFunc
  function displayName() {
    console.log(name);
  }
  return () =>{
    return this.name
  };
}
const myFunc = makeFunc();
console.log(myFunc());

function makeFunc() {
  const name = "Mozilla"; //local to makeFunc
  function displayName() {
    console.log(name);
    console.log(this.name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();

// • Q:is the local variable still accessible by myFunc?
// • A: yes. Example of saving local state inside a JavaScript closure.

// closure: A first-class function that binds to free variables that are defined in its
// execution environment.

// • a closure instance is created when the inner function is returned or assigned to a variable
// and it attaches itself to the free variables from the surrounding environment to "close" up
// those stray references.

const x = 1;

function f() {
  let y = 2;
  const sum = function () {
    const z = 3;
    console.log(x + y + z);// 6
  };
  y += 10; // 10
  return sum;
} //end of f
const g = f();

g()
g()
g()

console.log(
  "*******************************(Common closure bug with fix)***********************************"
);

var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = function () {
    return i;
  };
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());

console.log(
    "*******************************(pass by value)***********************************"
  );
/* return a function with no parameters
that has an ‘embedded parameter’ */
var helper = function (n) {
  return function () {
    return n;
  };
};
var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs[i] = helper(i);
}
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());
