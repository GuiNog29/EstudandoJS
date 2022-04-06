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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flashMessages = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csurf = require('csurf');
const {
  globalMiddleware,
  checkCsurfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: '51612354651654948949441564165162635185',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
});

app.use(sessionOptions);
app.use(flashMessages());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf());
app.use(globalMiddleware);
app.use(checkCsurfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('OK', () => {
  app.listen(3000, () => {
    console.log('Access http://localhost:3000');
    console.log('Server is running in 3000');
  });
});
