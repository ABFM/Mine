const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const util = require('./helpers/utility');
const bcrypt = require('bcrypt');
const app = express()

// using of modules-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')))
app.use(session({
  secret: "shhh, it is a secret",
  resave: false,
  saveUninitialized: true
}))

// the routes handlers----------------


app.get('/', util.checkUser, function(req, res) {
   res.render('index');

});


app.post('/login',function(req, res){
  var userName = req.body.username;
  var password = req.body.password;
  db.User.find({userName:userName}, function(err, data){
    if(err){
        console.log(err);
      }
      else {
        if (!data) {
          res.sendStatus(404)
        }
      bcrypt.compare(password, data[0].passWord, function(err, match){
        if(match) {
          res.status(201)
          util.createSession(req, res, data[0]);
        }
        else {
          console.log('err');
          res.status(404)
          res.redirect('/')
        }
      })
      }
    })
  })



app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.redirect('/');
  });
});


app.post('/signup', function(req, res){
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  db.User.find({
    userName: username
  }, function(err, data){

    if (err) {
      console.log(err);
    }
    else {
      console.log(data);
      if (data.length > 0) {
        res.status(404)
        console.log('already exist');
        res.redirect('/')
      }
      else {
        bcrypt.genSalt(10, function (err, salt) {
        if (err) console.log(err);
        bcrypt.hash(password, salt, function(err, hash) {
          let user = db.User({
            userName: username,
            passWord: hash,
            email: email
          })
          user.save((err, data) =>{
            if (err){
              console.log(err);
            }
            else {
              console.log(data);
              res.redirect('/')
            }
          })
        })
      })
      }
    }
})
});
app.post('/fetch', function (req, res){
  db.Url.find(req.body, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      res.send(data);
    }
  })
});

app.post('/add', function(req, res){
  let url = new db.Url({
  url: req.body.url,
  urlName: req.body.name,
  category: req.body.category,
  userName: req.session.user,
  likes: 0
  });
  url.save(function(err,data){
    if(err){
      console.log(err)
    }
    else {
      console.log('saved', data);
    }
  })

});

const port = process.env.port || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))
