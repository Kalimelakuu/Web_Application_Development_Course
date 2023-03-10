function getThis(){
    return this;
}

let obj1= {name: 'obj1'}

obj1.getThis = getThis;


 obj1 = {
    name:'obj1',
    getThis : function getThis(){
        return this;
    }
 }
console.log(obj1.name)
 
console.log(obj1.getThis())


