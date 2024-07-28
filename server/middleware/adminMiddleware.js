const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const isAdmin = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (user.userType !== process.env.Admin_Secret) {
    return res.status(403).json({ success: false, errors: "Access denied. Admins only." });
  }

  next();
});

module.exports = isAdmin;
