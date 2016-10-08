var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    title: {type : String},
    content: {type : String},
    creatTime: {type: Date, default: Date.now}
});

var News = mongoose.model('News', NewsSchema);
module.exports = News;
