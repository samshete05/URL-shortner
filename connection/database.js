const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/Shortner-URL', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error in connecting to MongoDB:", err);
    }
};

connectDB(); 
module.exports = connectDB;