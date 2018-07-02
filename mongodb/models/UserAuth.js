const mongoose = require('mongoose');

// define the user auth schema;
exports = userSchema = mongoose.Schema({
	email: String,
	password: String,
});

