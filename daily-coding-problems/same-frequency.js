// same frequency
// given two positive numbers find if two number have same frequency of digits
function sameFrequency(num1, num2){
 if(!(num1 && num2)) {
     return false;
 }

 //declare empty objects store unique num and its frequency
 let freqObj1 = {}; 
 let freqObj2 = {};
 // iterate through num1
 while(num1 > 0) {
     let reminder = num1 % 10;
     freqObj1[reminder] = freqObj1[reminder] ? ++freqObj1[reminder] : 1;
     num1 = Math.floor(num1 / 10);
 }
 // iterate through num2
 while(num2 > 0) {
     let reminder = num2 % 10;
     freqObj2[reminder] = freqObj2[reminder] ? ++freqObj2[reminder] : 1;
     num2 = Math.floor(num2 / 10);
 }
 // iterat through freqObj1 and check same numbers and same frequency
 for(let index in freqObj1) {
     if(!(index in freqObj2)) {
         return false;
     }
     if(freqObj1[index] !== freqObj2[index]) {
         return false;
     }
 } 
 //
 
 return true;
}
  console.log(sameFrequency(182, 281)); // true
  console.log(sameFrequency(34, 14)); // false
  console.log(sameFrequency(3589578, 5879385)); // true
  console.log(sameFrequency(22, 222)); // false