require('dotenv').config();

const express = require('express');

const app = express();



const mongoose = require('mongoose');

mongoose.connect(mongo_URI);

app.listen(3001, () => {
    console.log("Server runs perfectly!");
}) 
