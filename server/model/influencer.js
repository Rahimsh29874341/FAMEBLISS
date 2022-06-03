const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
   
    name : {
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    brand_url : {
        type: String,
        unique : false,
        required : true
    },
    image_file :
    {
        type: String,
        unique : false
    }
});

var influencer = mongoose.model("creator_records", scheme);

module.exports = influencer;