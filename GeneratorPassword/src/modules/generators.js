const symbols = ',.;/<>:?[]{}´~`^()-=_+*&¨%$#@!';
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUppercase = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qtd, uppercase, lowercase, numbers, symbols) {
  const passwordArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    uppercase && passwordArray.push(generateUppercase());
    lowercase && passwordArray.push(generateLowercase());
    numbers && passwordArray.push(generateNumber());
    symbols && passwordArray.push(generateSymbol());
  }

  return passwordArray.join('').slice(0, qtd);
}
