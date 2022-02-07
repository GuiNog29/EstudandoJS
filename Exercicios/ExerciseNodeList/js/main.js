const text = document.querySelector('.paragraphs');
const paragraphs = text.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

for (let p of paragraphs) {
  console.log(p);
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#fff';
}
