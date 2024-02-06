const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({ path: './.env'});


const getConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
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