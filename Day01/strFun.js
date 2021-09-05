// let str=  "pri.nce kumar"

// console.log(str.indexOf("p"));
// // 0
// console.log(str.length);
// // 13;
// console.log(str.slice(2));
// // i.nce kumar
// console.log(str.charAt(3));
// // .
// console.log(str.split(" "));
// // [ 'pri.nce', 'kumar' ]

// console.log(str.toUpperCase());
// // PRI.NCE KUMAR

// console.log(str.toLowerCase());
// // pri.nce kumar]

// console.log(str.charCodeAt(3));
// // 46

// let s = "          kuch likha hua hai                    "
// let NewS = s.trim();
// console.log(NewS);
// // kuch likha hua hai
/* if you create a variable inside the scope of the function with the same name as a globalVariable,
 you lose access to the value of globalVariable inside the scope of the function. */

var varName = 10;
var p = 4;
function outer() {
  console.log(varName);
  var varName = 20;
  function inner() {
      console.log(p);
    function inerr() {
      function inerr() {
        console.log(varName);
      }
      inerr();
    }
    inerr()
  }
  inner();
}

outer();
