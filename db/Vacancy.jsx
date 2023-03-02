const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    requirement: Number,
    lang: String
});

module.exports = mongoose.model("tbl_vacancy", vacancySchema);