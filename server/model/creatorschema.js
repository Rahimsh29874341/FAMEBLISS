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
    image_file :
    {
        type: String,
        unique : false
    }
});

var Student = mongoose.model("creator_records", scheme);

module.exports = Student;