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
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.use(session({
  secret: "shhh, it is a secret",

  resave: true,
  cookie: { maxAge : 300000000000000000000 },

  saveUninitialized: true
}))



// the routes handlers----------------

app.get('/', util.checkUser, function(req, res) {
   res.sendFile(path.join(__dirname + '/views/index.html'))

});


app.post('/login',function(req, res){
  var userName = req.body.username;
  var password = req.body.password;
  db.User.findOne({userName:userName}, function(err, data){
    if(err){
        console.log(err);
      }
      else {
        if (!data) {
          res.sendStatus(404)
        }
        else {
          bcrypt.compare(password, data.passWord, function(err, match){
            if(match) {
              res.status(201)
              util.createSession(req, res, data.userName);

            }
            else {
              console.log('err');
              res.sendStatus(404)
            }
          })
        }

      }
    })
  })



app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.sendStatus(200);
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
              util.createSession(req, res, data.userName);

            }
          })
        })
      })
      }
    }
})
});
app.post('/fetch', function (req, res){
  db.Url.find({
    category: req.body.category,
    userName: req.session.user
  }, function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log('data', data);
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
  console.log(req.session);
  url.save(function(err,data){
    if(err){
      console.log(err)
    }
    else {
      console.log('saved', data);
      res.sendStatus(201)
    }
  })

});

app.post('/delete', function(req,res) {
  const name = req.body.name;
  db.Url.remove({urlName: name}, function(err,data){
    if(err){
      console.log(err);
    } else {
    res.sendStatus(200)
    }
  });
})

app.post('/searchUser', function(req, res) {
  const username = req.body.username;
  db.Url.find({userName:username}, function(err, data) {
    if(err){
      console.log(err);
    } else {

      res.json(data);

    }
  })
})




app.get('/getUser', function (req, res) {
 db.User.findOne({userName:req.session.user}, function(err, data) {
   if (err) {
     console.log(err);
   }
   else {

     res.send(data)
   }
 })
})

app.post('/import', function(req, res) {
  db.Url.findOne({userName: req.body.username, urlName:req.body.name}, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      const imported = new db.Url({
        url: data.url,
        urlName: data.urlName,
        category: data.category,
        userName: req.session.user,
        likes: 0
      })
      imported.save(function(err, data){
        if(err) {
          console.log(err);
        } else {
          console.log('saved ',data);
        }
      })
    }
  });

})

app.post('/like',function(req,res){
  db.Url.update({userName:req.body.username, urlName:req.body.name}, { $inc: {likes: 1 } }, function(err,done){
      if(err){
        console.log(err)
      }
      console.log('success',done)
      res.sendStatus(201)
  });

})




const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))
