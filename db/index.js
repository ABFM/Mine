
const mongoose = require('mongoose');
const db = mongoose.connection;
//mongoose.connect('mongodb://localhost/Mine');
mongoose.connect('mongodb://zoaby:123456@ds255319.mlab.com:55319/mine');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connect');
});

const userSchema = mongoose.Schema({
  userName: String,
  passWord: String,
  email: String
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
