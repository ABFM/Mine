const mongoose = require('mongoose');

const userInfo = mongoose.Schema({
	name: String,
	country: String,
	birthday: Date,
	phone: Number,
	city: String,
	job: String
});
