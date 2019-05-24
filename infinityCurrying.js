const mul = x => y => {
  if (!y) {
    return x;
  }
  return mul(x * y);
};
console.log(mul(2)(3)(4)());