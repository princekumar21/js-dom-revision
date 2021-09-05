"use strict";

// let obj = {
//     name : "prince",
//     age : 45,
//     f : function(){

//         function fun(){

//             function funs(){
//                 console.log(this);
//             }

//             funs.call(this);

//         }

//         fun.call(this)

//     }
// }

let obj = {
  name: "prince",
  age: 45,
  f: function () {

    function fun(x, y, z) {
    console.log(1 + 2 + 3)
      console.log(this);

    }

    //call method it calls the function jispr apne use kra h ise and aap is arguments me this ka ref dete ho
    // and wohi ref g ka bhi this ban jata
    // fun.call(this, 1, 2, 3);

    // apply function works exactly the same with a subtle diff instead of passing value directly we can pass
    // an array
    // let arr = [1,2,3]
    // fun.apply(this, [1, 2, 3]);

    let g = fun.bind(this);
    g(1,2,3);
  },
};

obj.f();
