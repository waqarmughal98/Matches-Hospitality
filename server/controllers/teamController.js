const asyncHandler = require('express-async-handler');
const Team = require('../models/teamModel');
const handleError = require('../utils/errorHandler');



// Create Team
const createTeam = asyncHandler(async (req, res) => {
  try {
    const { name, categoryId , categoryName} = req.body;
    const logo = req.file ? req.file.filename : '';

    if (!logo) {
      return handleError(res, 400, 'Logo is required');
    }

    const newTeam = new Team({
      name,
      logo,
      categoryId,
      categoryName: categoryName || "" 
    });

    await newTeam.save();

    res.status(201).json({ success: true, data: newTeam });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Edit Team
const editTeam = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    const logo = req.file ? req.file.filename : undefined;

    const updateFields = {
      ...(name && { name }),
      ...(categoryId && { categoryId }),
      ...(logo && { logo }),
    };

    
    const updatedTeam = await Team.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedTeam) {
      return handleError(res, 404, 'Team not found');
    }

    res.status(200).json({ success: true, data: updatedTeam });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Delete Team
const deleteTeam = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return handleError(res, 404, 'Team not found');
    }

    res.status(200).json({ success: true, message: 'Team deleted successfully' });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get All Teams
const getAllTeams = asyncHandler(async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get Teams by Category ID
const getTeamsByCategoryId = asyncHandler(async (req, res) => {
    try {
      const { categoryId } = req.params;
      const teams = await Team.find({ categoryId });
      res.status(200).json({ success: true, data: teams });
    } catch (error) {
      handleError(res, 400, 'Something went wrong');
    }
  });

module.exports = {
  createTeam,
  editTeam,
  deleteTeam,
  getAllTeams,
  getTeamsByCategoryId
};
