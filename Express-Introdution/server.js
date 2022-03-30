const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Name: <input type="text" name="name">
  <button>Send</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('I received the form')
})

app.get('/contact', (req, res) => {
  res.send('Thanks you for contacting us');
});

app.listen(3000, () => {
  console.log('Access http://localhost:3000');
  console.log('Server is running in 3000');
});
