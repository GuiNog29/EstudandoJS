const elements = [
  { tag: 'p', text: 'Frase1' },
  { tag: 'div', text: 'Frase2' },
  { tag: 'footer', text: 'Frase3' },
  { tag: 'section', text: 'Frase4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let tagCreated = document.createElement(tag);
  let textCreated = document.createTextNode(text);
  tagCreated.appendChild(textCreated);
  div.appendChild(tagCreated);
}

container.appendChild(div);
