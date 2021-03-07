const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
    date: { type: String},
    table: { type: String},
    time: {type: String },
    location: { type: String }
});

module.exports=mongoose.model('restaurant',restaurantSchema)