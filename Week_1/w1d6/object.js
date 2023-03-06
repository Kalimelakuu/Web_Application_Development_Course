
function convertObjectToAnArray(obj) {
  let newArray = [];

  for (let ele in obj) {
    if (Array.isArray(obj[ele])) {
      let val = "";
      for (let x of obj[ele]) {
        val += x;
      }
      newArray.push(ele + val);
    } else if (typeof obj[ele] == "object") {
      for (let ele2 in obj[ele]) {
        let values = ele2 + obj[ele][ele2];
        newArray.push(ele + values);
      }
    } else {
      newArray.push(ele + obj[ele]);
    }
  }
  return newArray;
}

console.log(
  convertObjectToAnArray({ a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } })
);

function minifyObject(array) {
  let newArray = [];
  for (let object of array) {
    for (let key in object) {
      if (key == "a") {
        let tempObj = { a: object[key] };
        newArray.push(tempObj);
      }
    }
  }
  return newArray;
}
console.log(
  minifyObject([
    { a: 1, b: 2 },
    { a: 2, b: 4 },
  ])
);

function findOldestPerson(array) {
  let max = Number.MIN_VALUE;
  let name = "the array is empty name";
  for (let object of array) {
    if (object.age > max) {
      max = object.age;
      name = object.name;
    }
  }
  return name;
}

console.log(
  findOldestPerson([
    { name: "Ram", age: 20 },
    { name: "Lakshman", age: 15 },
  ])
);

function findYoungestPerson(array) {
  let max = Number.MAX_VALUE;
  for (let object of array) {
    if (object.age < max) {
      max = object.age;
    }
  }
  return max == Number.MAX_VALUE ? "Array is Empty" : max;
}

console.log(
  findYoungestPerson([
    { name: "Ram", age: 20 },
    { name: "Lakshman", age: 15 },
  ])
);

function findPersonBetween14_19(array) {
  let max = Number.MAX_VALUE;
  for (let object of array) {
    if (object.age <= 19 && object.age >= 14) {
      return object;
    }
  }
}

console.log(
  findPersonBetween14_19([
    { name: "Ram", age: 20 },
    { name: "Lakshman", age: 15 },
  ])
);


// create an object 
let obj1 = { a: 1, b: 3 };

console.log(obj1);

delete obj1.a;

console.log(obj1);

obj1.b = 10;

let arrayToBeCloned = [1,2,3]
let newArray = arrayToBeCloned
console.log(arrayToBeCloned)
console.log(newArray)

// changing the new array will affect the previous one
// because they are refering to the same memory 

newArray.push("New Item to Be added")
console.log(arrayToBeCloned)
console.log(newArray)

// if the array is cloned it will return  a new array refering to the 
// another memory
function clone(array){
    let newArray = []

    for(let ele of array){
        newArray.push(ele)
    }
    return newArray;

}

let arrayToBeCloned1 = [1,2,3]
let newArray1 = clone(arrayToBeCloned1)
console.log(arrayToBeCloned1)
console.log(newArray1)

// adding item to only one of them becuase they are refering to different space 
// in memeory
newArray1.push("New Item to Be added")
console.log(arrayToBeCloned1)
console.log(newArray1)
