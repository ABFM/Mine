// requiring modules for mongoose
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/Mine');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect');
});

const userSchema = mongoose.Schema({
  userName: String,
  passWord: String
});

const User = mongoose.model('User', userSchema);



module.exports = User;
