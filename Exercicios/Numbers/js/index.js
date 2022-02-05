let numero = prompt('Digite um número:');
document.body.innerHTML = `<strong> Seu número é ${numero}<strong/>  <br />`;
document.body.innerHTML += `Raiz quadrada é <strong>${Math.sqrt(
  numero
)}<strong/>  <br />`;
const ehInteiro = Number.isInteger(numero);
document.body.innerHTML += `${numero} é inteiro: ${ehInteiro} <br />`;
const ehNaN = Number.isNaN(numero);
document.body.innerHTML += `É NaN: <strong>${ehNaN}<strong/>  <br />`;
document.body.innerHTML += `Arredondando para baixo: <strong>${Math.floor(
  numero
)}<strong/>  <br />`;
document.body.innerHTML += `Arredondando para cima: <strong>${Math.ceil(
  numero
)}<strong/>  <br />`;
document.body.innerHTML += `Com duas casas decimais : <strong>${Number(
  numero
).toFixed(2)}<strong/>  <br />`;
