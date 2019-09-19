function test(input) {
  let phone = input.replace(/[^\d]/g, "");
  phonePattern = new Map([
    [7, /(\d{3})(\d{2})(\d{2})/],
    [8, /(\d{3})(\d{3})(\d{2})/],
    [9, /(\d{3})(\d{3})(\d{3})/]
  ]);
  if (phonePattern.has(phone.length)) {
    return phone.replace(phonePattern.get(phone.length), "$1-$2-$3");
  } else {
    return phone;
  }
}
console.log(test("1234567,")); // 123-45-67
//console.log(test("12345678,"));
//console.log(test("123456789,"));
// time complexity n and space complexity n
