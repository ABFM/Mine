exports.createSession = (req, res, newUser) => {
  return req.session.regenerate(() => {
    req.session.user = newUser;
    res.redirect('/');
  });
}
exports.isLoggedIn = (req, res) => {
  return req.session ? !!req.session.user : false;
};
exports.checkUser = (req, res, next) => {
  if (!exports.isLoggedIn(req)) {
    res.status(404)
    res.redirect('/')
  }
  else {
    next();
  }
};
