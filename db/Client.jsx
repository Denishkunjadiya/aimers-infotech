const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    image: String
});

module.exports = mongoose.model("tbl_client", clientSchema);