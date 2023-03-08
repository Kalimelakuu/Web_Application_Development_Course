// Map

const numbers = [5, 2, 7, 6];
const doubled = numbers.map((val) => val * 2);
console.log(doubled); // [ 10, 4, 14, 12 ]

// Filter

function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter((val) => val.length > 8);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const citiesArray = data.split(",");
console.log(citiesArray)


const commaSeparated = citiesArray.join(',');
console.log(commaSeparated)


const dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames.toString())