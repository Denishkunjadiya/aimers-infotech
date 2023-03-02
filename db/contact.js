const mongoose = require('mongoose');

const connectSchema = new mongoose.Schema({
    name: String,
    e_mail: String,
    mobile_no: Number,
    msg: String
});

module.exports = mongoose.model("tbl_contact", connectSchema);