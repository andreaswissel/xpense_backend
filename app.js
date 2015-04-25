var express = require('express'),
    app = express();
    app.port = 3000;
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
    require('./models/Expenses');

var expenses = require('./routes/expenses');


app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://xpense.dev');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);
app.use(logger('dev'));

var routes = {
  expenses: expenses
};

mongoose.connect('mongodb://localhost/xpense');

app.listen(app.port);

app.use('/api/expenses', routes.expenses);
