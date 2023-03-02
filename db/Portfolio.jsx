const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    p_name: String,
    p_type: String,
    image: String,
    made_by: String,
    s_detail: String,
    l_detail: String,
})

module.exports = mongoose.model("tbl_portfolio", portfolioSchema);