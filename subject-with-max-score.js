const data = [
  [22, "Data Structures", 45],
  [23, "English", 52],
  [22, "English", 51],
  [26, "Data Structures", 72],
  [23, "Data Structures", 61],
  [26, "English", 81]
];
//let m = new Map();
let output = {};
for (let i of data) {
  if (!output[i[1]]) {
    output[i[1]] = i[2];
  } else if (output[i[1]] && output[i[1]] < i[2]) {
    output[i[1]] = i[2];
  }
}

console.log(output);
// Output - {
//   "Data Structures": 26,
//   "English": 26
// }


