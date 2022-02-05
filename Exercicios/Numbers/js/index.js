let number = prompt('Type a number:');
document.body.innerHTML = `<strong> Your number is ${number}<strong/>  <br />`;
document.body.innerHTML += `Square root is <strong>${Math.sqrt(
  number
)}<strong/>  <br />`;
const isInteger = Number.isInteger(number);
document.body.innerHTML += `${number} is integer: ${isInteger} <br />`;
const ehNaN = Number.isNaN(number);
document.body.innerHTML += `It's NaN: <strong>${ehNaN}<strong/>  <br />`;
document.body.innerHTML += `Rounding down: <strong>${Math.floor(
  number
)}<strong/>  <br />`;
document.body.innerHTML += `Rounding up: <strong>${Math.ceil(
  number
)}<strong/>  <br />`;
document.body.innerHTML += `With two decimal places: <strong>${Number(
  number
).toFixed(2)}<strong/>  <br />`;
