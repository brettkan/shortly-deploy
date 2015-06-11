var mongoose = require('mongoose');

// may need to change url!!
var db = mongoose.connect('mongodb://localhost:27017/chat', function(err) {
  if (err) {
    console.log('Connected to mongo!');
  }
});

var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number
});

var UserSchema = new Schema({
  username: String,
  password: String
});

module.exports = db;
