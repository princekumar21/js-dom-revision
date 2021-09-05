let arr = [1, 2, 3, 4];

function f(arr) {
  for (x in arr) {
    arr[x] = 0;
  }
  return arr;
}

console.log(arr);

console.log(f(arr));

console.log(arr);
