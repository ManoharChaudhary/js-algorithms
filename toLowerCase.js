const toLowerCase = str => {
  let uppercase = "";
  const diff = 'A'.charCodeAt() - 'a'.charCodeAt();
  for (let char of str) {
    if (char >= "A" && char <= "Z") {
       uppercase += String.fromCharCode(char.charCodeAt() - diff);
    } else {
      uppercase += char;
    }
  }
  return uppercase;
};
// const toLowerCaseUsingLookUp = str => {
//   const lookup =[['A', 'a'],['B', 'b'],['C', 'c'],['D', 'd'],['E', 'e'],['F', 'f']];
//   const lookupMap = new Map(...lookup);
//   const uppercase = "";
//   for( let char of str) {
//     if(char >= 'A' && chart <= 'Z') {
//       uppercase +=lookupMap.get(char);
//     }else {
//       uppercase += char;
//     }
//   }
//   return uppercase;
// }
console.log(toLowerCase("ManoHar"));
//console.log(toLowerCase("AcDEf"));

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32  = 15 + 10 + 7
//                    10
//                 5      15
//               3   7   13  18  
//              1  6

//               Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23