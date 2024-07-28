const express = require('express');
const {
  createPackage,
  editPackage,
  deletePackage,
  getAllPackages
} = require('../controllers/packageContoller');
const { validatePackage } = require('../middleware/validationMiddleware');
const protect = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/create', protect, isAdmin, validatePackage, createPackage);
router.put('/edit/:id', protect, isAdmin, editPackage); 
router.delete('/delete/:id', protect, isAdmin, deletePackage);
router.get('/all', getAllPackages);

module.exports = router;
