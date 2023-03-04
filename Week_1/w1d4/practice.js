function indexOfFunction(myArray, ele){
    let result = -1;
    for( let i = 0 ; i < myArray.length ; i++){
        if( myArray[i] == ele ){
            result = i;
        }
    }
   console.log(result);
}


function lastIndexOfFunction(myArray, ele){
    let result = -1;
    for( let i = myArray.length-1 ; i >= 0; i--){
        if( myArray[i] == ele ){
            result = i;
        }
    }
   console.log(result);
}

function splitFunction(myArray, value){
    
    let newArray = [];
    let val = "";
    for( let i = 0 ; i < myArray.length ; i++){
        
        if( myArray[i] == value ){
            if(val != "" ) newArray.push(val);
            newArray.push("");
            val="";
        }else {
            val += myArray[i]
        }

    }
    //splitFunction([1,2,3,3,4,3,5], 3)  
    newArray.push(val)
            
    
    console.log(newArray) ;
   
}

function substringFunction(myArray, start, end){
    let newArray = [];
    for( let i = start ; i < end ; i++){
        newArray.push(myArray[i])
    }
   console.log(newArray);
}


function pushFunction(myArray, val){
    
    myArray[myArray.length] = val;
    console.log(myArray)
}

function pop(myArrays){
    if( myArrays != null ){
        console.log(myArrays[0])
    }
    let newArray =[]
    for( let i = 1 ; i < myArrays.length ; i++){
        newArray.push(myArrays[i])
    }
    console.log(newArray)
}

function shif



indexOfFunction([1,2,3,4], 5)
lastIndexOfFunction([1,2,3,4], 3)
splitFunction([1,2,3,3,4,3,5], 3)
substringFunction(["kal", "betty" , "libe"], 0 ,2)
pushFunction(["kal", "betty" , "libe"], "haile")
pop(["kal", "betty" , "libe"])