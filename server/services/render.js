/*
COMP229 Assignment 2 - render.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/


// Back-end for web app navigation

const axios = require('axios');

exports.homeRoutes = (req, res) => {
    //Make a get request to /api/products
    axios.get('http://localhost:3000/api/products').then(function(response) {
        //console.log(response.data)
        res.render('index', {products: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_product = (req, res) => {
    res.render('add_product');
}

exports.update_product = (req, res) => {
    axios.get('http://localhost:3000/api/products', {params: {id: req.query.id}}).then(function(productData) {
        res.render("update_product", {product: productData.data})
    })
    .catch(err =>{
        res.send(err);
    })
}