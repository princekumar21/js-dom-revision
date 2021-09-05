// setInterval(function(){
//     console.log("thi will print after 2 sec");
// }, 2000);


let id = setInterval(function () {
  console.log("thi will print after 2 sec");
}, 3000);

setTimeout(function(){
 clearInterval(id);
}, 3000)

