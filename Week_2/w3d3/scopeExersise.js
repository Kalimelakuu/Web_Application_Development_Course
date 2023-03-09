console.log("************************************(Read value from global scope, reassign the value inside function changes the global scope variable.)*************************************")
let x = 1;
function a(){
    console.log(x);//1
    x=2;
    console.log(x);//2
}
a();
console.log(x);//2

console.log("*********************(Object reassigned inside function, doesnt change the outside object)***************************************8")
let x = {a:1};
function a(x){
    x={a:4}
    console.log(x.a);//4
}
a();
console.log(x.a);//1

console.log(
    "*******************************(Local Variable changed )************************************"
  );
//local variable x is changed, doesnt affect the global variable
let x = 1;
function a(){
    let x=2;
    console.log(x);//2
}
a();
console.log(x);//1

console.log(
    "*******************************(Paramaeter changed )************************************"
  );
//parameter x is changed, doesnt affect the global variable
 var x = 1;
function a(x){
    x = 4;
    console.log(x);//4
}
a();
console.log(x);//1


console.log(
    "*******************************(/Declare new variable )************************************"
  );
//Declare new variable after changing the global variable, local variable is created, global variable remains unchanged.
let x = 1;
function a() {
  console.log(x); //undefined
  x = 2;
  console.log(x); //2
  var x = 4;
}
a();
console.log(x); //1

console.log(
  "*******************************(Object pass by reference)************************************"
);

let x = {a:1};
function a(x){
    x.a = 4;
    console.log(x.a);//4
}
a(x);
console.log(x.a);//4
