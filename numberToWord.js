function numberToWord(num) {
    let numSring = num.toString();
  single_digits = [ "zero", "one","two", "three","four", "five", "six", "seven","eight", "nine"];

  /* The first string is not used, it is to make  
array indexing simple */
  two_digits = [ "", "ten", "eleven","twelve", "thirteen","fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen"];

  /* The first two string are not used, they are to make array indexing simple*/
  tens_multiple = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  tens_power = ["hundred", "thousand"];
  length = numSring.length;
  finalWorld = "";
  while(length) {
     if(length)
     length--;
  }
}
console.log(numberToWord(1));
