import generatePassword from './generators';

const generatedPassword = document.querySelector('.password-generated');
const qtdCharacters = document.querySelector('.qtd-characters');
const checkBoxCapitalLetters = document.querySelector('.chk-capital-letters');
const checkBoxSmallLetters = document.querySelector('.chk-small-letters');
const checkBoxNumbers = document.querySelector('.chk-numbers');
const checkBoxSymbols = document.querySelector('.chk-symbols');
const generatePasswordButton = document.querySelector('.generate-password');

export default () => {
  generatePasswordButton.addEventListener('click', () => {
    if (qtdCharacters.value >= 20) {
      generatedPassword.innerHTML =
        'Number of characters cannot be greater than 20';
      return;
    }

    generatedPassword.innerHTML = generate();
  });
};

function generate() {
  const password = generatePassword(
    qtdCharacters.value,
    checkBoxCapitalLetters.checked,
    checkBoxSmallLetters.checked,
    checkBoxNumbers.checked,
    checkBoxSymbols.checked
  );
  return password || 'Nothing selected';
}
