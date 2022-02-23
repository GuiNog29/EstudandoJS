const numbers = [5, 10, 10, 10, 10];

const exerciseNumbers = numbers
  .filter(value => value % 2 === 0)
  .map(value => value * 2)
  .reduce((ac, value) => ac + value);

console.log(exerciseNumbers);
