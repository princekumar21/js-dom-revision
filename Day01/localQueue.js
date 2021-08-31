function queue() {
  let arr = [];
  console.log(arr);
  return function f(first, value) {
    console.log(arr + "inside");
    console.log(arguments);
    if (first === "insert") {
      arr.push(value);
      console.log(arr);
    } else if (first === "out") {
      arr.shift();
    } else if (first == "show") {
      console.log(arr);
    }
  };
}

let f = queue()("insert", 4);
f();

// let f = queue();

// f("insert", 4);
// f("insert", 5);
// f("insert", 6);
// f("show");
// f("out")
// f("show");
