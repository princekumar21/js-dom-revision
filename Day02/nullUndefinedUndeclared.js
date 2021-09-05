let a;
console.log(a);             //undefined
console.log(typeof a);      //undefined

var b = null;
console.log(b);             //null;
console.log(typeof b);      //object;

c = 2;
console.log(c);             //2
console.log(global.c);      //2
console.log(typeof global); //object

console.log(typeof c);      //number
