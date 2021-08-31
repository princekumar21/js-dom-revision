//JSON.stringify()
//it convert a js object in JSON string

let b = {
    name : 23,
};
// console.log(b);  /* { name: 'prince' } */ 
// console.log(JSON.stringify(b)); /* {"name":"prince"} */ 

let x = JSON.stringify(b);

let p = JSON.parse(x);
// console.log(p)
// JSON.parse
//used to convert string which contains js object back to a js object

//use of JSON conversion

let fs = require('fs')

fs.writeFileSync("text.json", JSON.stringify(b));


let buffer = fs.readFileSync("./text.json");
let strings  = buffer.toString();

console.log(JSON.parse(strings));