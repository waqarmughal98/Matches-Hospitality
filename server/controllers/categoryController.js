const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const handleError = require('../utils/errorHandler');

// Create Category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name, description } = req.body;
    const logo = req.files['logo'] ? req.files['logo'][0].filename : '';
    const banner_image = req.files['banner_image'] ? req.files['banner_image'][0].filename : '';

    if (!banner_image) {
      return handleError(res, 400, 'Banner image is required');
    }

    const newCategory = new Category({
      name,
      description,
      logo,
      banner_image,
    });

    await newCategory.save();

    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Edit Category
const editCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const logo = req.files['logo'] ? req.files['logo'][0].filename : undefined;
    const banner_image = req.files['banner_image'] ? req.files['banner_image'][0].filename : undefined;

    const updateFields = {
      ...(name && { name }),
      ...(description && { description }),
      ...(logo && { logo }),
      ...(banner_image && { banner_image }),
    };

    const updatedCategory = await Category.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedCategory) {
      return handleError(res, 404, 'Category not found');
    }

    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Delete Category
const deleteCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return handleError(res, 404, 'Category not found');
    }

    res.status(200).json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get All Categories
const getAllCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

module.exports = {
  createCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
};
