const numbers = [1, 2, 3, 10, 10, 10, 10];

// const total = numbers.reduce((accumulator, value) => {
//   accumulator += value;
//   return accumulator;
// }, 0);

// console.log(total);

// const pairNumbers = numbers.reduce((accumulator, value) => {
//   if (value % 2 === 0) accumulator.push(value);
//   return accumulator;
// }, []);

// console.log(pairNumbers);

// const doubleValues = numbers.reduce((accumulator, value) => {
//   accumulator.push(value * 2);
//   return accumulator;
// }, []);

// console.log(doubleValues);

const people = [
  { name: 'Luis', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Leticia', age: 19 },
  { name: 'Rosana', age: 100 },
  { name: 'Wallace', age: 47 },
];

const peopleOlder = people.reduce((accumulator, value) => {
  if (accumulator.age > value.age) return accumulator;
  return value;
});

console.log(peopleOlder);
