let str=  "pri.nce kumar"

console.log(str.indexOf("p"));
// 0
console.log(str.length);
// 13;
console.log(str.slice(2));
// i.nce kumar
console.log(str.charAt(3));
// .
console.log(str.split(" "));
// [ 'pri.nce', 'kumar' ]

console.log(str.toUpperCase());
// PRI.NCE KUMAR

console.log(str.toLowerCase());
// pri.nce kumar]

console.log(str.charCodeAt(3));
// 46

let s = "          kuch likha hua hai                    "
let NewS = s.trim();
console.log(NewS);
// kuch likha hua hai