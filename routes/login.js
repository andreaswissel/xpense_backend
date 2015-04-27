var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.post('/', function(req, res) {
  User.findOne({ username: req.body.user }, function(err, docs) {
    if(docs.password == req.body.pass) {
      res.send(200, {});
    } else {
      console.log('pass not matching')
      res.send(401, {});
    }
  });
});

module.exports = router;
