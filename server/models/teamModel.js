const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  logo: {
    type: String,
    required: [true, 'Logo is required'],
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category ID is required'],
  },
  categoryName: {
    type: String,
    required: [true, 'Category Name is required'],
  },
}, {
  timestamps: true,
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
