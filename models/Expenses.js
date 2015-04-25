var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpensesSchema = new Schema({
  title: { type: String },
  amount: { type: Number },
  timestamp: { type: Date, default: Date.now },
  category: { type: String }
});

mongoose.model('Expenses', ExpensesSchema);