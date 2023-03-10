console.log(
  "**************************(Module factory example)****************************************"
);

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

console.log(
  "**************************(Revealing Module Pattern)****************************************"
);

let musicPlayer = () => {
  let playSong = () => {
    console.log("Song has been played...!!");
  };

  let pauseSong = () => {
    console.log("Song Paused...!!");
  };

  return {
    playMusic: playSong,
    pauseMusic: pauseSong,
  };
};

let music_system = musicPlayer();
music_system.playMusic();
music_system.pauseMusic();

const myModule = (function () {
  const privateFunction = function (message) {
    console.log(message);
  };
  const publicFunction = function (text) {
    privateFunction(text);
  };
  return {
    publicMethod: publicFunction,
    privateFunc: privateFunction,
  };
})();
// Example of passing data into a private method
// Private method will console.log() 'Hello!'
myModule.publicMethod("Hello!");
myModule.privateFunc("This is from private function");

const Module = (function () {
  const privateArray = [];
  const publicFunction = function (something) {
    privateArray.push(something);
    console.log(privateArray);
  };
  return {
    publicMethod: publicFunction,
  };
})();

Module.publicMethod("Kali");
Module.publicMethod("Kali");
Module.publicMethod("Kali");

const Module1 = (function () {
  const privateFunction = function () {
    // private
    console.log("Private");
  };
  const someFunction = function () {
    // public
    console.log("Some Function");
  };
  const anotherFunction = function () {
    // public
    console.log("Another Function");
  };

  return { someMethod: someFunction, anotherMethod: anotherFunction };
})();
Module1.extension = function () {
  // another method! (Q: public or private?)
  console.log("Extention function");
};

Module1.extension();
module.exports = { Module1 };

console.log(
  "*************************(Before IIFE)*******************************"
);
// var count = 0;
// function incr(n){
//     count+=n
// }

// function reset(){
//     count = 0
// }

// incr(4)
// incr(2)
// console.log("count :" + count)
console.log(
  "**********************************(IIFE)************************************************"
);
// (function () {
//   var count = 0;
//   function incr(n) {
//     count += n;
//   }

//   function reset() {
//     count = 0;
//   }

//   incr(4);
//   incr(2);
//   console.log("count :" + count);
// })();
