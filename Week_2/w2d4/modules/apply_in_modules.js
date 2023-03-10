const Module1 = (function () {
  const someFunction = function (arg1, arg2) {
    console.log(`Argument 1: ${arg1}`);
    console.log(`Argument 2: ${arg2}`);
  };
  console.log(this);
  return { someMethod: someFunction };
})();

// Using apply
const argsArray = ["value 1", "value 2"];
Module1.someMethod.apply(this, argsArray);

// Using call
Module1.someMethod.call(this, "value 1", "value 2");
