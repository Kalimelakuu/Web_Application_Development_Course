function push(array, element){
   
    array[array.length] = element
    return array;

}

console.log(push([1,2],3 ))

function pop(array){
    let newArray = []
    for( let i = 1; i < array.length-1 ;i++){
        newArray.push(array[i])
    }
    return newArray;

}

// remove items from the beginning
function shift(array){
    let newArray = []
    for( let i = 1; i < array.length ;i++){
        newArray.push(array[i])
    }
    return newArray
}
console.log(shift([1, 2, 3]));

// remove items to the beginning
function unshift(array, element){
    let newArray = [element]
    for( let i = 0; i < array.length ;i++){
        newArray.push(array[i])
    }
    return newArray;

}
console.log(unshift([1, 2, 3], 4));


function slice(array, start , end , items){

    start = start < 0 ? 0 : start;
    end = end > array.length-1 ? array.length-1 : end;

    let newArray = [];
    for(let i = start ; i < end ;i++){
        newArray.push(array[i])
    }
    return newArray;

}
console.log(slice([1, 2, 3, 4], 1, 2));

function splice(array , start , count , item){

    let firstArray = array.slice(0, start);
    let secondArray = array.slice(start);

    for(let i = 0 ; i < count; i++){
        secondArray.shift()
    }
    for( let i = item.length-1 ; i >= 0 ; i--){
        secondArray.unshift(item[i])
        
    }

    for( let i = 0 ; i < secondArray.length; i++){
        firstArray.push(secondArray[i])

    }
    return firstArray;
}
console.log(" splice output ",splice([1,2,3,4,5,6],2,4,[5,6]))

function multipleofFour(array){

}

function getTypes(array){
}

function appendTypeIndexElement(array){

}