// context -> NodeJs + non strict mode

//in global area
// console.log(this); //empty object {}

// in global area ,inside function
// function f(){
//     console.log(this); //global object

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
      console.log(this); // global object
    }
    fun();
  },
};

obj.f();


// Summary 
// Context: nodejs + non strict 

// 1. global area => this = {}
// 2. function in global area => this = global object 
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => global object 

// case 2 and 4 behaves same 