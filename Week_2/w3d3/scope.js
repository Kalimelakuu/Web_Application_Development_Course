
console.log("**************************(PLEASE RUN EACH CODE SEPARTELY)************************************")

console.log(
  "********************(Hoisting a var in to global)***************************"
);
function foo() {
  x = 4;
  console.log(x);
} // oops, x is still alive now (global)

foo();
console.log(x);

console.log("********************(VAR and LET)***************************");
change the value of var
for (var i = 0; i < 10; i++) {
    console.log("i inside for loop: " + i);
}
console.log(i); // 10
if (i > 5) {
  var j = 3;
}
console.log("j OUTside block: " + j);
console.log(j)

console.log(
  "********************(VAR and LET(part 2))***************************"
);

//• var scope – nearest function scope

function a() {
    for (var x = 1; x < 10; x++) {
    console.log(x);
    }
    console.log("x: " + x);
    //10
}
a()
// the value of x is unknown it is limited to its nearest function scope
console.log(x)

//• let scope – nearest enclosing block
//Use let inside for loops to prevent leaking to Global Scope
function a() {
    for (let x = 1; x < 10; x++) {
    console.log(x);
    }
    console.log("x: " + x);
    //ReferenceError: x is not defined
}

console.log("********************(HOISTING)***************************");
// variables defined with var are hoisted and have value undefined until it
// is assigned a value in code

// ● JavaScript has a 2-pass compiler that hoists all function and variable
// declarations

// Variables have value 'undefined' until the execution pass and an assignment is made.

// • functions: saves entire function definition
// • variables: saves only variable name and value of ‘undefined’
//  ‘hoists’ variable and function declarations
// • No variable initialization or function expressions are hoisted

function f(){
    console.log(bar); //undefined
    var bar = "abc";
    console.log(bar); //abc
}

Function expressions are not hoisted, so cannot use function expression functions before
they are defined.

foo(); //TypeError: undefined is not a function
var foo = function (){

};

console.log(
  "********************(HOISTING EXAMPLE)***************************"
);

var a = 5;
function b(){
    console.log('function is called!')
}
console.log("a: " + a); //5
b(); // function is called!

console.log("a: " + a); //undefined
b(); // function is called!
var a = 5;
function b() {
 console.log("function is called!");

}

console.log(
  "********************(Execution context & stack example)***************************"
);

function a(){
    var x;
    console.log(x)
}

function b(){
    var x = 20;
    a()
    console.log(x)
}
var x = 20;
b()
console.log(x)

console.log("********************(Scope Example1)***************************");

// if it is not inner function it will consult global for the x
function a() {
  console.log(x); //; // consult Global for x and print 20 from Global
}

function b() {
  var x = 10;
  a(); // consult Global for a
}
var x = 20;
b();

// Example 2 for inner functions

function b() {
  function a() {
    console.log("The value of x inside the inner function : " + x);
  }
  var x = 10;
  a();
}
var x = 20;
b();

// Example 3 for inner function

function b() {
  function a() {
    console.log(x);
  }
  a();
}
var x = 20;
b();

// Example 4 for inner functions

function f() {
  var a = 1,
    b = 20,
    c;

  console.log("1 = " + a + " " + b + " " + c); // 1, 20 , undefined
  function g() {
    var b = 300,
      c = 4000;
    console.log("2 = " + a + " " + b + " " + c); //1 300 4000
    a = a + b + c; // 4301
    console.log("3 = " + a + " " + b + " " + c); // 4301 300 4000
  }
  console.log("4 = " + a + " " + b + " " + c); // 1 20 undfined
  g(); //
  console.log("5 = " + a + " " + b + " " + c); // // 4301 20 undfined
}
f();

// Example 6

var x = 10;
function main() {
  console.log("x1 is:" + x);// x = undifined
  x = 20;
  console.log("x2 is:" + x); // x = 20
  if (x > 0) {
    var x = 30;
    console.log("x3 is:" + x); // x is 30
  }
  console.log("x4 is:" + x);// x is 30
  var x = 40;
  var f = function (x) {
    console.log("x5 is:" + x); // x is 50
  };

  f(50);
  console.log("x6 is:" + x); // x is 40
}
main();
console.log("x7 is:" + x); // x is 10
