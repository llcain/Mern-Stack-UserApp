// const dotenv = require('dotenv')
// dotenv.config();

require('../config/db.js');
const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const cors = require("cors");
const getConnection = require("../config/db");
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// connect to db

// mongoose.connect(`${process.env.MONGO_URL}`)
    
//     .then(() => {
//         // listening for request
        
//     })
//     .catch((error) => {
//         console.log(error)
//     })

getConnection();

    app.listen(process.env.PORT, () => {
        console.log(`connected to db and listening on port ${process.env.PORT}`);
    }) 

    console.log(process.env.PORT);

// const express = require("express");

// const app = express();

// app.listen(3001, () => {
//     console.log("listening on port 3001");
// })
