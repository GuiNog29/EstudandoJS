const numbers = [1, 2, 3, 10, 15, 45, 60];

const doubleNumbers = numbers.map(numbers => numbers * 2);
console.log(doubleNumbers);

const people = [
  { name: 'Luis', age: 62 },
  { name: 'Maria', age: 23 },
  { name: 'Eduardo', age: 55 },
  { name: 'Leticia', age: 19 },
  { name: 'Rosana', age: 32 },
  { name: 'Wallace', age: 47 },
];

const onlyNames = people.map(obj => obj.name);
console.log(onlyNames);

const ages = people.map(obj => ({ age: obj.age }));
console.log(ages);

const addId = people.map((obj, i) => {
  const newObj = { ...obj };
  newObj.id = i + 1;
  return newObj;
});
console.log(addId);
