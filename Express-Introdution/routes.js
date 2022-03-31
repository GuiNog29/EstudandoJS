const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

// Routes of home
route.get('/', homeController.initialPage);
route.post('/', homeController.treatPost);

// Routes of contact
route.get('/contact', contactController.initialPage);

module.exports = route;
