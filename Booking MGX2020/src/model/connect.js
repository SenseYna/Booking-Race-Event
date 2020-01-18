var mongoose = require('mongoose');
var {DATA_COLLECTION} = require("../config")
mongoose.connect(`mongodb://localhost:27017/${DATA_COLLECTION}`, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(`mongodb+srv://webdevstudios:webdevstudiosPass@webdevstudios-th9o8.mongodb.net/${DATA_COLLECTION}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });