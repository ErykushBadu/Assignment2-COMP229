/*
COMP229 Assignment 2 - model.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/


// Connecting to MongoDB database

const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        // MongoDB connection string
        const con = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('MongoDB connected: mongodb+srv://admin:admin123@atlascluster.bqttcud.mongodb.net/?retryWrites=true&w=majority');
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB