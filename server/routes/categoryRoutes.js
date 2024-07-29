// routes/categoryRoutes.js
const express = require('express');
const {
  createCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
} = require('../controllers/categoryController');
const { validateCategory } = require('../middleware/validationMiddleware');
const protect = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const isAdmin = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/create', protect, isAdmin, upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'banner_image', maxCount: 1 }]), validateCategory, createCategory);
router.put('/edit/:id', protect,isAdmin, upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'banner_image', maxCount: 1 }]), editCategory);
router.delete('/delete/:id', protect, isAdmin,deleteCategory);
router.get('/all', protect,getAllCategories);

module.exports = router;
