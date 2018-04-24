

// creating the session with a given userName
exports.createSession = (req, res, newUser) => {
  return req.session.regenerate(() => {
    req.session.user = newUser;
    res.redirect('/')
  });
}


// check if the user is logged in
exports.isLoggedIn = (req, res) => {
  return req.session ? !!req.session.user : false;
};


// this is the middle ware we will call it before rendering the main page
exports.checkUser = (req, res, next) => {
  if (!exports.isLoggedIn(req)) {
    res.status(404)
  }
  else {
    next();
  }
};
