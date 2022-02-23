const form = document.querySelector('.form');
const result = document.querySelector('.result');

const people = [];

function getEventForm(event) {
  event.preventDefault();

  const name = form.querySelector('.name');
  const surname = form.querySelector('.surname');
  const weight = form.querySelector('.weight');
  const height = form.querySelector('.height');

  people.push({
    name: name.value,
    surname: surname.value,
    weight: weight.value,
    height: height.value,
  });

  console.log(people);

  result.innerHTML += `<p>${name.value} ${surname.value}  ${weight.value}  ${height.value}</p>`;
}

form.addEventListener('submit', getEventForm);
