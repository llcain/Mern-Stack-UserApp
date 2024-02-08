// const dotenv = require('dotenv')
// dotenv.config();

require('../config/db.js');
const dotenv = require('dotenv')
dotenv.config({ path: './.env' });
const cors = require("cors");
const getConnection = require("../config/db");
const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

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

app.get("/getUsers", (req, res) => {
    UserModel.find()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        res.status(500).json(error)
    })
    // UserModel.find().then((err, result) => {
    //     if(err) {
    //         res.json(err)
    //     } else {
    //         res.json(result)
    //     }
    // });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    
    res.json(user);
});


// connect to db

// mongoose.connect(`${process.env.MONGO_URL}`)
    
//     .then(() => {
//         // listening for request
        
//     })
//     .catch((error) => {
//         console.log(error)
//     })

getConnection();

    app.listen(3001, () => {
        console.log("connected  db & listening on port 3001");
    }) 

   

// const express = require("express");

// const app = express();

// app.listen(3001, () => {
//     console.log("listening on port 3001");
// })
