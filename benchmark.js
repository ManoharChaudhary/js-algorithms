const benchmarkMap = size => {
  var map = new Map();
  for (var i = 0; i < size; i++) map.set(i, i);
  for (var i = 0; i < size; i++) var x = map.get(i);
  console.timeEnd("benchmarkMap");
};

const benchmarkObj = size => {
  console.time("benchmarkObj");
  var obj = {};
  for (var i = 0; i < size; i++) obj[i] = i;
  for (var i = 0; i < size; i++) var x = obj[i];
  console.timeEnd("benchmarkObj");
};
const benchmarkArray = size => {
  console.time("benchmarkArray");
  var arr = [];
  for (var i = 0; i < size; i++) arr[i] = i;
  for (var i = 0; i < size; i++) var x = arr[i];
  console.timeEnd("benchmarkArray");
};

var size = 1000000;

benchmarkMap(size);
benchmarkObj(size);
benchmarkArray(size);
