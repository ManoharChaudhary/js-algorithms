//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?
function findLargestPrimeFactor(num) {
  let largestPrimeFactor = null;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (isPrime(i) && num % i == 0) {
      largestPrimeFactor = i;
    }
  }
  return largestPrimeFactor;
}
function isPrime(num) {
  let flag = 1;
  if (num == 2) {
    return true;
  } else if (num < 2 || num % 2 == 0) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isPrime(35));
console.time();
console.log(findLargestPrimeFactor(600851475143));
console.timeEnd();
