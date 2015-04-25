var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String }
});

mongoose.model('User', UserSchema);