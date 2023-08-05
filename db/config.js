const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

// mongoose.connect('mongodb://127.0.0.1:27017/db_aimars',);
// mongoose.connect('mongodb+srv://denishkunjadiya:HQdE2X8z7qdrG5rX@cluster0.o1s7rud.mongodb.net/?retryWrites=true&w=majority',);


const connectDB = async (DATABASE_URL, DATABASE) => {
    try {
        const DB_OPTIONS = {
            dbName: DATABASE
        }
        mongoose.set("strictQuery", false);
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Database Connected Successfully..");
    } catch (err) {
        console.log("Database Not connected", err.message);
    }
}
module.exports = connectDB