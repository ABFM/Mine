const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/Users');

// handle the sign up requests;
router.post('/users/signup', UsersCtrl.sign_up);

module.exports = router;
