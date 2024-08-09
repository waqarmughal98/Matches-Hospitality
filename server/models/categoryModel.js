const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  logo: {
    type: String,
  },
  banner_image: {
    type: String,
    required: [true, 'Banner image is required'],
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
