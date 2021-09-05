//pollyfill for filter
Array.prototype.myFilter = function (cb) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      ans.push(this[i]);
    }
  }
  return ans;
};

let arr = [1, 2, 3, 4, 5, 6];

let retunArray = arr.myFilter(function (x) {
  return x % 2 === 0;
});

console.log(retunArray);


//pollyfill for map

Array.prototype.myMap = function (callback) {
  let ans = [];
  for (let i = 0; i < this.length; i++) {
    ans.push(callback(this[i]));
  }

  return ans;
};

let arr = [1, 2, 3, 4, 5, 6];

let mapArray = arr.myMap(function (y) {
  return y * 2;
});

console.log(mapArray);
