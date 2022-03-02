function People(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

People.prototype.fullName = () => {
  return `My full name is ${this.name} ${this.lastName}`;
};

const people = new People('Guilherme', 'Mathias');

console.log(people.fullName());
