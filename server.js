const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const util = require('./helpers/utility');
const bcrypt = require('bcrypt');
const app = express()

// using the view engines and other middlwares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile)
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname , 'views')));
app.use(session({
  secret: "shhh, it is a secret",

  resave: true,
  cookie: { maxAge : 300000000000000000000 },

  saveUninitialized: true
}))








app.post('/login',function(req, res){
  //searching if the user exist in the schema and checking if the password is right, and create session for him.  
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
  //destroying the session for the user and let him quit
  req.session.destroy(function() {
    res.sendStatus(200);
  });
});


app.post('/signup', function(req, res){
  //checking if the user exist in the schema, if not, hashing his passowrd and create session for him and save his data inside our schema 
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
        res.sendStatus(404)
        console.log('already exist');
       
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
  //retrieving the categories for the  session user
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

app.post('/add', function(req, res){ //let the user add a new url for him, and save it inside our schema

  if (req.session.user === undefined || req.body.url === undefined || req.body.name === undefined || req.body.category === undefined) {
        //we're checking if the user is not a member(has no user session) or if the inputs are empty, the user is denied access 
    res.sendStatus(404)
  }
  else {
    let url = new db.Url({
    url: req.body.url,
    urlName: req.body.name,
    category: req.body.category,
    userName: req.session.user,
    likes: 0,
    likesUsers: []
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

  }

});

app.delete('/delete', function(req,res) {
  //deleting a specific url 
  console.log(req.body.id);
  const name = req.body.name;

  db.Url.remove({_id : req.body.id}, function(err,data){

    if(err){
      console.log(err);
    } else {
    res.sendStatus(200)
    }
  });
})


app.post('/searchUser', function(req, res) { // searching for other users' urls
  if(req.session.user && req.body.username){ //we're checking if the user is not a member(has no user session), or empty input, his access will be denied 

    const username = req.body.username;
    db.Url.find({userName:username}, function(err, data) {
    if(err){
      console.log(err);
    }
    else {
      res.send(data);
    }
  })
  }
  else {
  res.sendStatus(404)
  }
})




app.get('/getUser', function (req, res) {
  //fetching the user data for display it in the DOM (his username, email and photo)
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
  //let the user import the others urls, and save it in his categories
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
      //let the user like others' content and increment the likes and add the user in the session to the likesUsers array
       db.Url.update({userName:req.body.username, urlName:req.body.name}, { $push: {likesUsers: req.session.user } , $inc :{likes: 1} },function(err,done){
      if(err){
        console.log(err)
      }
      console.log('success',done)
      res.sendStatus(201)
  });




})

app.post('/unlike',function(req,res){
        //let the user  unlike a content and decrement the likes splice the session user from the likesUsers array
      db.Url.update({userName:req.body.username, urlName:req.body.name}, { $pull: {likesUsers: req.session.user } , $inc :{likes: -1} },function(err,done){
      if(err){
        console.log(err)
      } else{
          console.log('success',done)
          res.sendStatus(201)
       }

  });

})
app.post('/photo',function(req,res){ // add a personal photo for the user
var image = req.body.image
db.User.update({userName: req.session.user}, { $set: { image: image }},function(err,data){
  if(err){
    throw err
  }else{
    res.send(data)
  }
})

})




const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port ', port))
