let number = 5;
let factorial = 1;

for (let i = number; i >= 1; i--){
  factorial *= i;
}
console.log(`The factorial of ${number} is ${factorial}`);
