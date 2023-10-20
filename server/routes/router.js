/*
COMP229 Assignment 2 - router.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/

// Routes for web app

const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')

// GET home page
route.get('/', services.homeRoutes);

// GET add-product page
route.get('/add-product', services.add_product);

// GET update-product page
route.get('/update-product', services.update_product);


// API routes
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);

module.exports = route