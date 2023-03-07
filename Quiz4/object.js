function objectToAnArray(obj){
    let newArray =[]

    for( let key in obj){
        newArray.push(key + obj[key])
    }
    return newArray
}

console.log(objectToAnArray({a:1,b:2,c:3}))