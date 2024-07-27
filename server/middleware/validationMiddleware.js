const { check, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateSignup = [
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  check('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  validateRequest,
];

const validateLogin = [
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  check('password')
    .notEmpty().withMessage('Password is required'),
  validateRequest,
];

const validateChangePassword = [
  check('old_password')
    .notEmpty().withMessage('Old password is required'),
  check('current_password')
    .notEmpty().withMessage('Current password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  check('password_confirmation')
    .notEmpty().withMessage('Password confirmation is required')
    .custom((value, { req }) => value === req.body.current_password).withMessage('Passwords do not match'),
  validateRequest,
];

const validateResetPassword = [
  check('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please enter a valid email'),
  check('otp')
    .notEmpty().withMessage('OTP is required'),
  check('new_password')
    .notEmpty().withMessage('New password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  validateRequest,
];

module.exports = {
  validateSignup,
  validateLogin,
  validateChangePassword,
  validateResetPassword,
};
