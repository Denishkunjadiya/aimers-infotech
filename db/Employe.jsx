const mongoose = require('mongoose');

const employeSchema = new mongoose.Schema({
    name: String,
    ability: String,
    image: String
});

module.exports = mongoose.model("tbl_employes", employeSchema);