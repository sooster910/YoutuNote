var mongoose = require('mongoose');

//schema setup
var contentSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,

    text: String

    

});

module.exports = mongoose.model("Content",contentSchema);