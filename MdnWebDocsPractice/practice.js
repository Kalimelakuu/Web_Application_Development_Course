"use strict";
function foo() {
  var x = 1;
  function bar() {
    var y;
    var x;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  // console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();

//********************************************************************* */

function do_something() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

///This is implicitly understood as:

function do_something() {
  var bar;
  console.log(bar); // undefined
  bar = 111;
  console.log(bar); // 111
}

//********************************************************************* */

var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
"use strict";

var x = 0;
function f() {
  var x = y = 1; // Throws a ReferenceError in strict mode.
}
f();

console.log(x, y);

//********************************************************************* */
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a


//********************************************************************* */

myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;

//
