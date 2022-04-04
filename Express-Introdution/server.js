require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('OK');
  })
  .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('OK', () => {
  app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server is running in 3000');
  });
});
