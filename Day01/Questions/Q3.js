let input = [
  { name: "Boston", rainfall: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Chandler", rainfall: [0, 0, 1, 0, 0, 1, 1] },
  { name: "Charlotte", rainfall: [2, 2, 2, 2, 2, 2, 2] },
  { name: "Dallas", rainfall: [3, 3, 2, 6, 1, 3, 8] },
];

function rainDance() {
  let arr = [];
  for (let x in input) {
    let value = input[x].rainfall;

    let sum = 0;
    for (let y in value) {
      sum += value[y];
    }
    let avg = sum / value.length;
    arr.push({ name: input[x]["name"], avgRainfall: avg });
  }
  return arr;
}

console.log(rainDance());
