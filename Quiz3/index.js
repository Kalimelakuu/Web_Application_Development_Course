//  QUESTION NUMBER ONE

function removeMultiplesOf8(array){
    let newArray = []
    for( let i = 0 ; i < array.length ;i++){
        if( array[i] % 8 != 0){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(removeMultiplesOf8([3,24,16,7,8]));//[3,7]
console.log(removeMultiplesOf8([3]));//[3]

// QUESTION NUMBER TWO

function merge(arr1, arr2){
    let newArray =[];
    for(let ele1 of arr1){
        for(let ele2 of arr2){
            newArray.push(ele1 + "-" + ele2)
        }
    }
    return newArray
}

console.log(merge(['apple','pear'],[1,2]));

console.log(merge(['apple','pear','banana'],[1]));


// QUESTION NUMBER 3

function printPattern(string){
    
    let counter;
    let space;
    console.log(string.charAt(0));
    console.log()
    for( let i = 1 ; i < string.length-1 ; i++){
        space= "";
        counter = i*3
        while(counter != 0){
            space+="  ";
            counter--;
        }
        console.log(space , "*")
        console.log(space , string.charAt(i))
        
       
     
    }
    space= "";
    counter = (string.length-1)*3
    while(counter != 0){
        space+="  ";
        counter--;
    }
    console.log(space , string.charAt(string.length-1))
  
}
printPattern('hello')

printPattern('International')