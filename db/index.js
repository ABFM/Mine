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
const urlSchema = mongoose.Schema({
  url: String,
  urlName: String,
  category: String,
  userName: String,
  likes: Number
})
const Url = mongoose.model('Url', urlSchema)
const User = mongoose.model('User', userSchema);



module.exports.User = User;
module.exports.Url = Url;
