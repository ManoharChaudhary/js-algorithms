// why even only: even number always has factor expect number 2;
// why sqrt : if number cannot prefectly divide from 2 to square root
// of number. then it can not divide from 2 upto number
// ex: 36=1*36
//         =2*18
//         =3*12
//         =4*9
//         ------------
//         =6*6
//         ------------
//         =9*4
//         =12*3
//         =18*2
//         =36*1
const getPrimes = number => {
  primes = [];
  for (let prime = 2; prime <= number; prime++) {
    if (isPrime(prime)) {
      primes.push(prime);
    }
  }
  return primes;
};
function isPrime(num) {
  if (num > 2 && num % 2 === 0) {
    return false;
  }
  let flag = 1;
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      flag = 0;
      break;
    }
  }
  if (flag === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(getPrimes(21));
