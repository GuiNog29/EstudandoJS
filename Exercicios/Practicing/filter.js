const numbers = [1, 2, 3, 10, 15, 45, 61];

const filteredNumbers = numbers.filter(value => value > 10);
console.log(filteredNumbers);

const people = [
  { name: 'Luis', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Leticia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

const namesWith5LettersOrMore = people.filter(
  people => people.name.length >= 5
);
console.log(namesWith5LettersOrMore);

const aged50OrOver = people.filter(people => people.age.valueOf() > 50);
console.log(aged50OrOver);

const nameEndsWithA = people.filter(people =>
  people.name.toLowerCase().endsWith('a')
);
console.log(nameEndsWithA);
