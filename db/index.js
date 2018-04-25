
const mongoose = require('mongoose');
const db = mongoose.connection;
var databaseConnect = 'mongodb://localhost/Mine' || 'mongodb://zoaby:123456@ds255319.mlab.com:55319/mine'
//mongoose.connect('mongodb://localhost/Mine');
mongoose.connect(databaseConnect);

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
  likes: Number,
  likesUsers: [String]
})
const Url = mongoose.model('Url', urlSchema)
const User = mongoose.model('User', userSchema);



module.exports.User = User;
module.exports.Url = Url;
