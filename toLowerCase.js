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