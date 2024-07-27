const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { generateToken, isValidEmail, generateOTP } = require('../utils/tokenUtils');
const { sendOTPEmail } = require('../utils/otpUtils');

/* Sign Up */
const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User with this email already exists!' });
    }
  
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    user = await User.create({ email, password: hashedPassword });
  
    const token = generateToken(user._id.toString());
  
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: {
        email,
        id: user._id.toString(),
        token,
      },
    });
    
  } catch (error) {
    res.status(400).json({
      success: true,
      message: 'Something went wrong!',
    });
  }
});

/* Login */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: 'Incorrect credentials!' });
  }

  const matchedPassword = await bcrypt.compare(password, user.password);
  if (!matchedPassword) {
    return res.status(400).json({ success: false, message: 'Incorrect password!' });
  }

  const token = generateToken(user._id.toString());

  res.status(200).json({
    success: true,
    message: 'User logged in successfully!',
    data: {
      name: user.name,
      email,
      id: user._id.toString(),
      token,
    },
  });
});

/* Logout */
const logout = (req, res) => {
  const token = req.headers.authorization;
  console.log(token, 'token');
};

/* Change Password */
const changePassword = asyncHandler(async (req, res) => {
  const { old_password, current_password, password_confirmation } = req.body;

  if (!old_password || !current_password || !password_confirmation) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  if (current_password.length < 8 || current_password !== password_confirmation || current_password === old_password) {
    return res.status(400).json({ success: false, message: 'Invalid password criteria' });
  }

  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(old_password, user.password);
  if (!passwordMatch) {
    return res.status(400).json({ success: false, message: 'Incorrect old password' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(current_password, salt);

  user.password = hashedPassword;
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password changed successfully',
  });
});

/* Delete User */
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
  
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ success: true, message: 'User deleted successfully' });
    
  } catch (error) {
    res.status(405).json({
      success: true,
      message: 'Something went wrong!',
    });
  }
});

/* Send OTP */
const sendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  const otp = generateOTP();
  user.otp = otp;
  await user.save();

  const emailSent = await sendOTPEmail(email, otp);
  if (!emailSent) {
    return res.status(500).json({ success: false, message: 'Error sending OTP' });
  }

  res.status(200).json({ success: true, message: 'OTP sent successfully' });
});

/* Verify OTP */
const verifyOTP = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (otp !== user.otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  res.status(200).json({ success: true, message: 'OTP verified successfully' });
});

/* Reset Password */
const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, new_password } = req.body;

  if (!email || !otp || !new_password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  if (otp !== user.otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  if (new_password.length < 8) {
    return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(new_password, salt);

  user.password = hashedPassword;
  user.otp = undefined; // Clear OTP after successful password reset
  await user.save();

  res.status(200).json({ success: true, message: 'Password reset successfully' });
});

module.exports = {
  signup,
  login,
  logout,
  changePassword,
  deleteUser,
  sendOTP,
  verifyOTP,
  resetPassword
};
