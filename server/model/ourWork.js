const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
   
    heading : {
        type: String,
        unique : false,
        required : true
    },
    description : {
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

var ourWork = mongoose.model("creator_records", scheme);

module.exports = ourWork;