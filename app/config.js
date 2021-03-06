var mongoose = require('mongoose');

var connectionUrl = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost:27017/chat';

var db = mongoose.connect(connectionUrl, function(err) {
  if (err) {
    return console.log('Failed to connect to mongo');
  }
  console.log('Connected to mongo!');
});

var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: {type: Number, default: 0}
});

var UserSchema = new Schema({
  username: String,
  password: String
});

module.exports.UrlSchema = UrlSchema;
module.exports.UserSchema = UserSchema;

