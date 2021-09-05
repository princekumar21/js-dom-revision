// context -> NodeJs + non strict mode

//in global area
// console.log(this); //global object(window)

// in global area ,inside function
// function f(){
//     console.log(this); //global object(window)

// }

// f();

//  direct function in an Object
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
      console.log(this); // global object(window)
    }
    fun();
  },
};

obj.f();


// Summary 
// Context: browser + non strict 

// 1. global area => this = global object(window) [this is different from nodejs]
// 2. function in global area => this = global object(window) 
// 3. direct function in an object => this = object itself 
// 4. indirect function in an object => global object(window) 

// case 2 and 4 behaves same 
