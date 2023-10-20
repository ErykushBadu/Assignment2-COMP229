/*
COMP229 Assignment 2 - model.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/


// Document model using mongoose

const mongoose = require('mongoose');

var schema = new mongoose.Schema ({
    name:{ type: String, required: true },
    description: { type: String, required: false},
    category: { type: String, required: true},
    price: { type: Number, required: true},
    quantity: { type: Number, required: true}
})

const productDB = mongoose.model('productdb', schema);

module.exports = productDB;