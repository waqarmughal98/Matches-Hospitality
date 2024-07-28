const asyncHandler = require('express-async-handler');
const Package = require('../models/packageModel');
const handleError = require('../utils/errorHandler');

// Create Package
const createPackage = asyncHandler(async (req, res) => {
  try {
    const { name, description, price, matchTicket, externalFlight, hotelAccommodation, groundTransportation } = req.body;

    const newPackage = new Package({
      name,
      description,
      price,
      matchTicket,
      externalFlight,
      hotelAccommodation,
      groundTransportation,
    });

    await newPackage.save();

    res.status(201).json({ success: true, data: newPackage });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Edit Package
const editPackage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
  
    const updatedPackage = await Package.findByIdAndUpdate(id, req.body, { new: true });
  
    if (!updatedPackage) {
      return handleError(res, 404, 'Package not found');
    }
  
    res.status(200).json({ success: true, data: updatedPackage });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Delete Package
const deletePackage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
  
    const deletedPackage = await Package.findByIdAndDelete(id);
  
    if (!deletedPackage) {
      return handleError(res, 404, 'Package not found');
    }
  
    res.status(200).json({ success: true, message: 'Package deleted successfully' });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get All Packages
const getAllPackages = asyncHandler(async (req, res) => {
  try {
    const packages = await Package.find();

    res.status(200).json({ success: true, data: packages });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});



module.exports = {
  createPackage,
  editPackage,
  deletePackage,
  getAllPackages,
};
