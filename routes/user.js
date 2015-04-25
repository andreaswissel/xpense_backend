var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res) {
  User.find({}, function(err, docs) {
    res.json(docs);
  });
});

module.exports = router;
