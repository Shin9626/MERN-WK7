var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test@ds155490.mlab.com:55490/username');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name : String,
  comments : String,
  time : String
});
module.exports = mongoose.model('Person', personSchema);
