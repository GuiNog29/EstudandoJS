const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write');
const read = require('./modules/read');

const people = [
  { name: 'Corlos' },
  { name: 'Ronaldo' },
  { name: 'Agnaldo' },
  { name: 'Jonelson' },
];

const json = JSON.stringify(people, '', 2);

write(filePath, json);

async function readFile(pathFile) {
  const data = await read(pathFile);
  renderData(data);
}

function renderData(data) {
  data = JSON.parse(data);
  data.forEach((value => console.log(value)));
}

readFile(filePath);
