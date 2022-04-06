const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Routes of home
route.get('/', homeController.index);

// Routes of Login
route.get('/login/', loginController.index);

module.exports = route;
