var mongoose = require('mongoose');
var {DATA_COLLECTION} = require("../config")
mongoose.connect('mongodb+srv://duyquan071299:hokage071299@cluster0-xh5e9.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, });
// mongoose.connect(`mongodb+srv://webdevstudios:webdevstudiosPass@webdevstudios-th9o8.mongodb.net/${DATA_COLLECTION}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });