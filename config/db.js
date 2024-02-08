const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({ path: './.env'});


const getConnection = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://llcain2012:wwg1fZPF928kvFCJ@cluster0.ybqdtjn.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if (conn) {
            console.log(`MongodB connected on ${conn.connection.host}`);
        } else {
            console.log("Failed to connect to DB");
        }
    } catch (error) {
        console.log(`Failed with error: ${error.message}`);
    }
};

module.exports = getConnection;