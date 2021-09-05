// context -> NodeJs + non strict mode

"use strict"

//in global area
console.log(this); // window

// in global area ,inside function
// function f(){
//     console.log(this); undefined

// }

// f();

// direct function in an Object
// let obj = {
//     name : "prince",
//     age : 16,
//     f : function(){
//         console.log(this);  // object itself
//     }
// }

// obj.f();

// indirect function in an Object

// let obj = {
//   name: "prince",
//   age: 16,
//   f: function () {
//     function fun() {
//       console.log(this); // undefined
//     }
//     fun();
//   },
// };

// obj.f();

// Summary 
// Context: browser + non strict 

// 1. global area => this = global object(window) [this is different from nodejs]
// 2. function in global area => this = undefined
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => undefined

// case 2 and 4 behaves same 
