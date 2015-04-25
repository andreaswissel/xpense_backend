var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Expenses = mongoose.model('Expenses');

router.get('/', function(req, res) {
  Expenses.find({}, function(err, docs) {
    res.json(docs);
  });
});

router.get('/:id', function(req, res) {
  Expenses.findOne({ _id: req.params.id }, function(err, docs) {
    res.json(docs);
  });
});

router.post('/add', function(req, res) {
  var expense = new Expenses(req.body);

  expense.save(function(err) {
    if(err) {
      return console.error(err);
    } else {
      res.send(200, {});
    }
  });
})

module.exports = router;
