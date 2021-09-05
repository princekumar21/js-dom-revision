// let arr = [1, 2, 3];
// console.log(arr); /*[1, 2, 3];*/
// arr.push(4);
// console.log(arr); /*[ 1, 2, 3, 4 ]*/

// console.log(arr);
// arr.pop();
// console.log(arr);

// /*
// join is opposite of spilt method in string
// it return a string
// does not change origin array
// */
// console.log(arr.join('-'));  //1-2-3
// console.log(arr.join(''));  /*123*/

// console.log(arr);
// let a = arr.shift();
// console.log(a);   /*1*/
// console.log(arr);

// console.log(arr);
// let b = arr.unshift(5);
// console.log(b);   /* 2 */
// console.log(arr);

let arr = [4, 5, 3, 6, 2];
// arr.forEach((n) => {
//   console.log(n);
// });

// arr.forEach((n, array) => {
//   console.log(n + " "+ array);

// });

// let hello = arr.map(function(e){
//     return e * 2;
// })
// console.log(arr);
// console.log(hello);

// let hello = arr.filter((e, index) => {
//     return e % index == 0;

// })

// console.log(hello);



let team = [
  {
    name: "aaron",
    position: "developer",
  },
  {
    name: "beth",
    position: "ui designer",
  },
  {
    name: "cara",
    position: "developer",
  },
  {
    name: "daniel",
    position: "content manager",
  },
  {
    name: "ella",
    position: "cto",
  },
  {
    name: "fin",
    position: "backend engineer",
  },
  {
    name: "george",
    position: "developer",
  },
];

let ans = team.filter((e) => {
    return e.position == "developer"

})

console.log(ans);
