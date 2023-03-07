function sum(myArray){
    let sum = 0;
    for(let ele of myArray){
        sum+=ele;
    }
    return sum;
}
console.log(sum([1,2,3]));

function findElement(array,myElement){
    for(let ele of array){
        if(ele==myElement)
            return true;
    }
    return false;
}
//using indexOf
function find(array,str){
    return array.indexOf(str)>=0?true:false;
}
console.log(find(["a","b"],"a"))
console.log(findElement(["a","b"],"a"))

function createSet(myArray){
    let newArray = [];
    for(let ele of myArray){
        let found = false;
        for(let inner of newArray){
            if(ele==inner)
            {
                found = true;
                break;
            }
        }
        if(!found)
            newArray.push(ele);
    }
    return newArray;
}

//using indexOf
function removeDuplicates(myArray){
    let newArray = [];
    for(let ele of myArray){
        if(newArray.indexOf(ele)<0)
            newArray.push(ele)
    }
    return newArray;
}
console.log(removeDuplicates(["apple","banana","apple"]));

console.log(createSet(["cider","banana","apple"]));

function changeArray(myArray){
    let element = myArray.pop();
    if(element%4==0)
        myArray.unshift(element);
    return myArray;
}
console.log(changeArray([10,20,3,4]))
console.log(changeArray([4,5,6]))

function reverseString(string){
    let newString='';
    for(let i = string.length-1;i>=0;i--){
        newString+=string[i];
    }
    return newString;
}
console.log(reverseString("string")) //gnirts

function changeString(string){
    let str = string.charAt(1);
    if(str=='a')
        return string.charAt(0)+"b"+string.substring(2);
    return string;
}
console.log(changeString("wap"));

console.log([1,20,3].indexOf(20))



