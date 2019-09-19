function nthPrime(num, count = 0, start = 1) {
  while (count < num) {
    if (isPrime(start) && count + 1 == num) {
      return start;
    }else if(isPrime(start)) {
      count++;
    }
    start++;
  }
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
console.log(nthPrime(10001));