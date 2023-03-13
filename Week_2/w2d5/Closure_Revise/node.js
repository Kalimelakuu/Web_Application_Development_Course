const myModule = (function () {
  const privateFunction = function (message) {
    console.log(message);
  };
  const publicFunction = function (text) {
    privateFunction(text);
  };
  
  return {
    publicMethod: publicFunction,
  };
})();

myModule.publicMethod("Hello")
