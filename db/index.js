const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/la-lista');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongoose connection success!');
});

let itemSchema = mongoose.Schema({
  name: String,
  store: String,
  price: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports.Item;