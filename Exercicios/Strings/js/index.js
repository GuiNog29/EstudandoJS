const nome = prompt('Type your name:');
document.body.innerHTML = `Your name is: <strong>${nome}<strong/> <br />`;
document.body.innerHTML += `Your name has <strong>${nome.length}<strong/> letters  <br />`;
document.body.innerHTML += `The second letter of your name is: <strong>${nome[1]}<strong/>  <br />`;
document.body.innerHTML += `What is the first index of letter E in your name? <strong>${nome.indexOf(
  'e'
)}<strong/>  <br />`;
document.body.innerHTML += `Whats is the last index of letter E in your name? <strong>${nome.lastIndexOf(
  'e'
)}<strong/>  <br />`;
document.body.innerHTML += `The last 3 letters of your name are: <strong>${nome.slice(
  -3,
  nome.length
)}<strong/>  <br />`;
document.body.innerHTML += `The words of your name are: <strong>${nome.split(
  ' '
)}<strong/>  <br />`;
document.body.innerHTML += `Your name in capital letters: <strong>${nome.toUpperCase()}<strong/>  <br />`;
document.body.innerHTML += `Your name in lowercase: <strong>${nome.toLowerCase()}<strong/>  <br />`;
