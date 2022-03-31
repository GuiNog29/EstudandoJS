const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Name: <input type="text" name="name">
  <button>Send Form</button>
  </form>
  `);
});

app.get('/tests/:userId', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`You send: ${req.body.name}`);
});

app.listen(3000, () => {
  console.log('Access http://localhost:3000');
  console.log('Server is running in 3000');
});
