// context -> NodeJs +  strict mode

"use strict"

//in global area
// console.log(this); //empty object {}

// in global area ,inside function
// function f(){
//     console.log(this); //undefined

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

let obj = {
  name: "prince",
  age: 16,
  f: function () {
    function fun() {
      console.log(this); // undefined 
    }
    fun();
  },
};

obj.f();


// Summary 
// Context: nodejs + strict 

// 1. global area => this = {}
// 2. function in global area => this = undefined  (diff from non strict)
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => undefined   (diff from non strict)

// case 2 and 4 behaves same 