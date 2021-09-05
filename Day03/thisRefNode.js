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