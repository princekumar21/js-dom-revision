function fun() {
    console.log(typeof arguments[0]);
  let sum = 0;
  for (let x in arguments) {
    sum += arguments[x];
  }
  return sum;
}

console.log(fun(1,3,4));
// argument is nothning but array like object
// index will be key and whatever passes will be value of thet particular key

function f(flag) {
  if (flag === "a") {
    let sum = 0;
    for (let i = 1; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  } else if (flag === "m") {
    let mul = 1;
    for (let i = 1; i < arguments.length; i++) {
      mul *= arguments[i];
    }
    return mul;
  }
}

console.log(f("a", 2, 3, 2));
