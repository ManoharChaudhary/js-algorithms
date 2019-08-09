const inc = num => num + 1;
const mulBy2 = num => num * 2;
const square = num => num * num;
const addResult = inc(2);
const mulBy2Result = mulBy2(addResult);

console.log(mulBy2Result); // 6
// prople with this approach is we are creating exta varible for result of add func.
// also we have many functions to get call we need to handle many variable

// util function:
 const pipe = (f, s) => (...args) => s(f(...args));
// rest operator used to create array and then again sprend to send to first function

// example
 const incThenmulBy2 = pipe(inc, mulBy2);
 //incThenmulBy2(5) // 12
// console.log(incThenmulBy2(5))

// by our above logic things working perfectly but what if we have more than 2 functions to be piped?

// 1 approauch:

 //const incThenmulBy2ThenSquare = pipe(pipe(inc, mulBy2), square);
// incThenmulBy2ThenSquare(2)// 36
// console.log(incThenmulBy2ThenSquare(2))

// the above code will work but harded to read and not maintainable.

// final approach:
const _pipe = (f, s) => (...args) => s(f(...args));
const pipe = (...fns) => fns.reduce(_pipe);
const incThenmulBy2ThenSquare = pipe(
  inc,
  mulBy2,
  square
);
console.log(incThenmulBy2ThenSquare(2))
