/*
COMP229 Assignment 2 - server.js
Sultan Sadaqat (301161755)
Prof. Deepti Sharma
October 20th, 2023 
*/

// launch file server.js

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const { connection } = require('mongoose');
const connectDB = require('./server/database/connection.js');

const app = express();

dotenv.config( {path: 'config.env'} );
const PORT = process.env.PORT || 8080;

// MongoDB connection
connectDB();

// logging requests
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

app.set("views", "./views");
app.set("view engine", "ejs");

// load assets
app.use(express.static("./crud_app/assets"))

// load routers
app.use('/', require('./server/routes/router.js'))

app.listen(PORT, ()=> {console.log("Server is running on http://localhost:3000")});