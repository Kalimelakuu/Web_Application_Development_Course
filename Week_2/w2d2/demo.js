function findMin(){
    let min= Number.MAX_VALUE;
    for(let i = 0 ; i < arguments.length ;i++){
        if( min > arguments[i]){
            min = arguments[i]
        }
    }
    return min
}

console.log(findMin(1,3,4,-2))

function findSum(){
    let sum= 0;
    for(let i = 0 ; i < arguments.length ;i++){
        sum += arguments[i]
    }
    return sum
    
}
console.log("Sum : " + findSum(1,3,4,-2))



let obj1 = {a:1, b:2, c:3}
const {a,c} = obj1
console.log(a,c)