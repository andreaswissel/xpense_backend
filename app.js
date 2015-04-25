var express = require('express'),
    app = express();
    app.port = process.argv[2];
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
    require('./models/Expenses');
    require('./models/User');

var expenses = require('./routes/expenses');
var login = require('./routes/login');
var user = require('./routes/user');


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
  expenses: expenses,
  user: user,
  login: login
};

mongoose.connect('mongodb://localhost/xpense');

app.listen(app.port);

console.log('listening on port ', app.port)

app.use('/api/expenses', routes.expenses);
app.use('/api/login', routes.login);
app.use('/api/user', routes.user);
