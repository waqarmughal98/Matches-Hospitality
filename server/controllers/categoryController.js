const asyncHandler = require('express-async-handler');
const Category = require('../models/categoryModel');
const Team = require('../models/teamModel');
const Event = require('../models/eventModel');
const handleError = require('../utils/errorHandler');

// Create Category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name, description, status } = req.body;
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
      status: status || 'active' 
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
    const { name, description, status } = req.body;
    const logo = req.files['logo'] ? req.files['logo'][0].filename : undefined;
    const banner_image = req.files['banner_image'] ? req.files['banner_image'][0].filename : undefined;

    const updateFields = {
      ...(name && { name }),
      ...(description && { description }),
      ...(status && { status }), 
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
    const category = await Category.findById(id);
    if (!category) {
      return handleError(res, 404, 'Category not found');
    }

    await Team.deleteMany({ categoryId: id });
    await Event.deleteMany({ 'category._id': id });
    await Category.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Category and associated teams and events deleted successfully' });
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

const activateDeactivateCategory = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['active', 'inactive'].includes(status)) {
      return handleError(res, 400, 'Invalid status value');
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedCategory) {
      return handleError(res, 404, 'Category not found');
    }

    await Team.updateMany(
      { categoryId: id },
      { status }
    );

    await Event.updateMany(
      { 'category._id': id },
      { status }
    );

    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});


module.exports = {
  createCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
  activateDeactivateCategory
};
