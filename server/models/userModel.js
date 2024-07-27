const mongoose = require('mongoose');
const validateEmail = require('../utils/emailValidator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'User with this email already exists'],
    validate: [validateEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  otp: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
