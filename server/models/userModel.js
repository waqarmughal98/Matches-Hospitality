const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required : [true, "Email is required"],
    unique: [true, 'User with this email already exists'],
  },
  password: {
    type: String,
    required : [true, "Password is required"],
  },
  userType:{
    type: String,
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
