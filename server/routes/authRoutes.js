const express = require('express');
const {
  signup,
  login,
  logout,
  changePassword,
  deleteUser,
  sendOTP,
  verifyOTP,
  resetPassword,
  getAllUsers,
  changeUserStatus
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');

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
router.get('/all-users', protect, isAdmin, getAllUsers);
router.patch('/change-user-status/:id', protect, isAdmin, changeUserStatus);

module.exports = router;
