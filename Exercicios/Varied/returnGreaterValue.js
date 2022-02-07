function returnGreaterValue(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

const returnGreaterValue2 = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

const returnGreaterValue3 = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log(returnGreaterValue(20, 15));
console.log(returnGreaterValue2(20, 15));
console.log(returnGreaterValue3(20, 15));
