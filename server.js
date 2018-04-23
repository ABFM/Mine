//importing the modules

const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const util = require('./helpers/utility');
const bcrypt = require('bcrypt');
const app = express()

// using the middleWares *******************************************************
    // bodyParser middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
    // session middleWare
app.use(express.static(path.join(__dirname, 'views')))
app.use(session({
  secret: "shhh, it is a secret",
  resave: false,
  saveUninitialized: true
}))

// the routers *****************************************************************



  // the main page route with checkUser midlleWare
app.get('/', util.checkUser, (req, res) => {
   res.render('index');

});




  // take the post request for the login *******************
app.post('/login',function(req, res){
  var userName = req.body.username;
  var password = req.body.password;
// check the User in the database
  db.User.findOne({userName:userName}, function(err, data){
    if(err){
        console.log(err);
      }
      else {
// if it is not exist
        if (!data) {
          res.sendStatus(404)
        }
// if it is exist
        else {
      // compare the given passWord with the hashed passWord
          bcrypt.compare(password, data.passWord, function(err, match){
            // if the passWord is valid
            if(match) {
              res.status(201)
              util.createSession(req, res, data.userName);
            }
            // if the passWord is not valid
            else {
              console.log('err');
              res.status(404)
              res.redirect('/')
            }
          })
        }

      }
    })
  })




  // take the post request for the logout *******************
app.get('/logout', function(req, res) {
  req.session.destroy(function() {
    res.sendStatus(200);
  });
});




   // take the post request for the signup ************************************
app.post('/signup', function(req, res){
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  // search for the given user in the database
  db.User.find({
    userName: username
  }, function(err, data){

    if (err) {
      console.log(err);
    }
    else {
    // if the user   is exist in the database
      if (data.length > 0) {
        res.status(404)
        console.log('already exist');
        res.redirect('/')
      }
    // if the user is not exist in the database
      else {
        // hash the passWord before saving in the database
        bcrypt.genSalt(10, function (err, salt) {
        if (err) console.log(err);
        bcrypt.hash(password, salt, function(err, hash) {
          let user = db.User({
            userName: username,
            passWord: hash,
            email: email
          })
          // saving in the database
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





// fetch the urls for specific user and specific category **********************
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




// adding a url to the database ************************************************
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
      res.sendStatus(201)
    }
  })

});




// to dalete a specific url from the database **********************************
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



// get the urls for a specific user ********************************************
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




// add a specific url to my urls ***********************************************
app.post('/import', function(req, res) {
  db.Url.findOne({userName: req.body.username, urlName:req.body.name}, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      const imported = new db.Url({
        url: data.url,
        urlName: data.name,
        category: data.category,
        userName: req.session.user,
        likes: data.likes
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



// to increase the like counter by 1 *******************************************



// to decrease the like counter by 1 *******************************************










// run the server 😎 
const port = process.env.port || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'))
