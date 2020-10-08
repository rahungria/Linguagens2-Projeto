const mongoose = require('mongoose');

//schema seguro
const seguroSchema = mongoose.Schema({
    name:           {type:String, required:true},
    imageurl:       {type:String, required:true},
    brief:          {type:String, required:false},
    description:    {type:String, required:true},
});

module.exports = mongoose.model('Seguro', seguroSchema);
