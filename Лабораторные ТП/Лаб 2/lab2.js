//1
function returnFirstArgument(arg){
    return arg;
}
function defaultParameterValue(a,b){
    return a+b;
}
function returnArgumentsArray() {
    var mas=[];
    for(var i=0;i<arguments.length;i++)
        mas[i]=arguments[i];
    return mas;
}
function returnFnResult(func) {
    var rez=func(20,b);
    return rez;
}
function bindFunction(func,a, b) {
    return func(a,b);
}
//2
function viv(i,item){
    console.log("Elem "+i+": "+item);
}
function testmap(elem){
    return elem+'1';
}

function testreduce(rez,i){
    return rez+i;
    }
function forEach(array, fun) {
    for(var i=0; i<array.length;i++){
        fun(i,array[i]);
    }
}
function map(array, func) {
    var mas=[];
    for(var i=0; i<array.length;i++){
        mas[i]=func(array[i]);        
    }
    return mas;
}
function reduce(array, func, initial) {
    var rez=null;
    for(var i=initial; i<array.length;i++){
        if(i==initial)
            rez=array[initial];
        else
            rez=func(rez,array[i]);        
    }
    return rez;
}
function slice (array, begin,end) {
    var mas=[];
    var j=0;
    for(var i=begin; i<array.length && i<end;i++){
        mas[j]=array[i];
        j++;          
    }
    return mas;
}
function deleteProperty(obj, prop) {
    delete obj[prop];
}
function hasProperty(obj, prop) {
    if(obj[prop]==undefined)
        return false;
    else
        return true;
}
function getEnumProps(obj) {
    var mas=[];
    var i=0;
    for(key in obj){
        mas[i]=key;
        i++;
    }
    return mas;
}
function upperProps(obj) {
    var mas=[];
    var i=0;
    for(key in obj){
        mas[i]=key.toUpperCase();
        i++;
    }
    return mas;
}
var b=100;
var test;
var mas=['10','20','30'];
var obj1={ 
a:10,
b:'20',
c: 45
};
var proxy=new Proxy(obj1,{
        set(obj,prop,value){
            obj[prop]=value*value;

        },
        get(obj,prop){
            return obj[prop];
        }
    });
test=returnFirstArgument(3);
console.log(test);
test=defaultParameterValue(20,b);
console.log(test);
test=returnArgumentsArray(1,2,3);
console.log(test);
test=returnArgumentsArray(5,10);
console.log(test);
test=returnFnResult(defaultParameterValue);
console.log(test);
test=bindFunction(defaultParameterValue,40,b);
console.log(test);
forEach(mas,viv);
test=map(mas,testmap);
console.log(test);
test=reduce(mas,testreduce,0);
console.log(test);
test=slice(mas,1,5);
console.log(test);
deleteProperty(obj1, "a");
console.log(obj1);
console.log(hasProperty(obj1, "a"));
console.log(hasProperty(obj1, "b"));
test=getEnumProps(obj1);
console.log(test);
test=upperProps(obj1);
console.log(test);
proxy.c=3;
console.log(obj1);