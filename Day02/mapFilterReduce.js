let arr = [1,2,3];

function double(x){
    return x * 2;
}
let returnedArray = arr.map(double);
// console.log(returnedArray);

function isEven(x){
    return x % 2 === 0;
}
let returnArray = arr.filter(isEven)
// console.log(returnArray);

function add(x, y){
    return x * y;
}
let returnValue = arr.reduce(add);
console.log(returnValue);