function convertObjectToArray(obj){
    let newArray = [];
    for( let key in obj ){
        console.log(typeof obj[key])
        newArray.push(key + " " + obj[key])
    }
    return newArray;
}

//console.log(convertObjectToArray({a:1,b:[1,2],c:'string',d:{x:1,y:2}}))

function minifyObject(array){
    let newArray = []
    for(let ele of array){
        for( let key in ele ){
            if( key == 'a'){
                let obj = {"a": ele[key]}
                newArray.push(obj)
            }   
        }   
    }
    return newArray
}
console.log(minifyObject([{a:1,b:2} ,{a:2, b:4}]))

function getTheOldestPerson(array){
    let obj ={};
    let oldAge = 0;
    for( let ele of array){

        for( let key in ele){
            if( ele[key]> oldAge){
                obj = ele;
                oldAge = ele[key]
            }
        }
    }
    return obj.name;

}
console.log(getTheOldestPerson([{name:"Ram",age:20},
    {name:"Lakshman",age:15}]))

