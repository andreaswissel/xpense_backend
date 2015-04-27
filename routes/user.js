var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res) {
  User.find({}, function(err, docs) {
    res.json(docs);
  });
});

router.post('/register', function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body)

  newUser.save(function(err) {
    if(err) {
      return console.error(err);
    } else {
      res.send(200, {});
    }
  });
});

module.exports = router;
