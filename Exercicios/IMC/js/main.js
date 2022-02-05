const form = document.querySelector('.form');
const result = document.querySelector('#result');

function calculateIMC(event) {
  event.preventDefault();
  result.classList.remove('bad');

  let p = form.querySelector('.weight');
  let a = form.querySelector('.height');
  const weight = p;
  const height = a;

  if (!weight || weight >= 600) {
    result.classList.add('bad');
    result.innerHTML = `<p>Weight Invalid</p>`;
    return;
  }
  if (!height || height >= 2.5) {
    result.classList.add('bad');
    result.innerHTML = `<p>Height Invalid</p>`;
    return;
  }

  const imc = getIMC(weight.value, height.value);
  const levelIMC = getLevelIMC(imc);

  if (imc >= 25) result.classList.add('bad');
  else result.classList.add('paragraph-result');

  result.innerHTML = `<p>Your IMC is ${imc} (${levelIMC})</p>`;
}

function getLevelIMC(imc) {
  const nivel = [
    'Under weight',
    'Normal weight',
    'Overweight',
    'Obesity grade 1',
    'Obesity grade 2',
    'Obesity grade 3',
  ];

  if (imc > 40) return nivel[5];
  if (imc >= 35 && imc <= 39.9) return nivel[4];
  if (imc >= 30 && imc <= 34.9) return nivel[3];
  if (imc >= 25 && imc <= 29.9) return nivel[2];
  if (imc >= 18.5 && imc <= 24.9) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getIMC(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

form.addEventListener('submit', calculateIMC);
