const express = require('express');
const {
  signup,
  login,
  logout,
  changePassword,
  deleteUser,
  sendOTP,
  verifyOTP,
  resetPassword
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const {
  validateSignup,
  validateLogin,
  validateChangePassword,
  validateResetPassword,
} = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.post('/logout', protect, logout);
router.post('/change-password', protect, validateChangePassword, changePassword);
router.delete('/delete-user', protect, deleteUser);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', validateResetPassword, resetPassword);

module.exports = router;
