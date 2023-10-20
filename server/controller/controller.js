/*
COMP229 Assignment 2 - server.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/

// Controller file for navigation

var productDB = require('../model/model');

// create and save a new product
exports.create = (req, res) => {
    if(!req.body) { 
        res.status(400).send({message: "Content cannot be empty."}); 
    } else {

    // new product
    const product = new productDB ({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    })

    // save product into database
    product.save(product).then(data => {
            res.redirect('/')
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "An error occured while creating a product." });
        });
    }
}

// retrieve and return all products OR retrieve and return a single product
exports.find = (req, res) => {

    if(req.query.id) {
        const id = req.query.id;
        productDB.findById(id).then(data => {
            if(!data) {
                res.status(404).send({message: "Product ID: " + id + " not found."})
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error retrieving product with id: " + id})
        })
    } else {
        productDB.find().then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "An error occured while retrieving product information."});
        });
    }
}

// update a new identified product by productID
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "Updated data cannot be empty."});
    }
    const id = req.params.id;
    productDB.findByIdAndUpdate(id, req.body, { useFindandModify: false}).then(data => {
        if(!data) {
            res.status(404).send({message: "Cannot update product."});
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error, update product information."});
    });

}

// delete an existing product by productID
exports.delete = (req, res) => {
    const id = req.params.id;

    productDB.findByIdAndDelete(id).then(data => {
        if(!data) {
            res.status(404).send({message: "Cannot delete product."})
        } else {
            res.send({
                message: "Product was deleted sucessfully."
            })
        }
    })
    .catch(err => {
        res.status(500).send({message: "Cannot delete product with id: " + id});
    });
}