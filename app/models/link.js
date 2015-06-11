var db = require('../config');
var mongoose = require('mongoose');
var crypto = require('crypto');

var Link = mongoose.model('Link', db.UrlSchema);

db.UrlSchema.pre('save', function(next) {
  var url = this;
  var shasum = crypto.createHash('sha1');
  shasum.update(url.get('url'));
  url.set('code', shasum.digest('hex').slice(0, 5));
  next();
});


module.exports = Link;
