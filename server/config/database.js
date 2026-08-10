const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
    const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/study-notion";

    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });

        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("DB Connection Failed");
        console.error(error.message);
        console.log("Starting server without a database connection. Some features may be unavailable until MongoDB is reachable.");
    }
};