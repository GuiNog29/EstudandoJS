const form = document.querySelector('.form');
const resultado = document.querySelector('#resultado');

function calcularIMC(evento) {
  evento.preventDefault();
  resultado.classList.remove('bad');

  let p = form.querySelector('.peso');
  let a = form.querySelector('.altura');
  const peso = p;
  const altura = a;

  if (!peso || peso >= 600) {
    resultado.classList.add('bad');
    resultado.innerHTML = `<p>Peso Inválido</p>`;
    return;
  }
  if (!altura || altura >= 2.5) {
    resultado.classList.add('bad');
    resultado.innerHTML = `<p>Altura Inválida</p>`;
    return;
  }

  const imc = getIMC(peso.value, altura.value);
  const nivelIMC = getNivelIMC(imc);

  if (imc >= 25) resultado.classList.add('bad');
  else resultado.classList.add('paragrafo-resultado');

  resultado.innerHTML = `<p>Seu IMC é ${imc} (${nivelIMC})</p>`;
}

function getNivelIMC(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobre peso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3',
  ];

  if (imc > 40) return nivel[5];
  if (imc >= 35 && imc <= 39.9) return nivel[4];
  if (imc >= 30 && imc <= 34.9) return nivel[3];
  if (imc >= 25 && imc <= 29.9) return nivel[2];
  if (imc >= 18.5 && imc <= 24.9) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

form.addEventListener('submit', calcularIMC);
