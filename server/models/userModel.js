const mongoose = require('mongoose');
const validateEmail = require('../utils/emailValidator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'User with this email already exists'],
    validate: [validateEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
