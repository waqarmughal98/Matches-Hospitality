const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const handleError = require('../utils/errorHandler');

// Create Event
const createEvent = asyncHandler(async (req, res) => {
  try {
    const { category, team1, team2, date, time, packages } = req.body;

    const newEvent = new Event({
      category,
      team1,
      team2,
      date,
      time,
      packages,
    });

    await newEvent.save();

    res.status(201).json({ success: true, data: newEvent });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Edit Event
const editEvent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { category, team1, team2, date, time, packages } = req.body;

    const updateFields = {
      ...(category && { category }),
      ...(team1 && { team1 }),
      ...(team2 && { team2 }),
      ...(date && { date }),
      ...(time && { time }),
      ...(packages && { packages }),
    };

    const updatedEvent = await Event.findByIdAndUpdate(id, updateFields, { new: true }).populate('category team1 team2');

    if (!updatedEvent) {
      return handleError(res, 404, 'Event not found');
    }

    res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Delete Event
const deleteEvent = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return handleError(res, 404, 'Event not found');
    }

    res.status(200).json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get All Events
const getAllEvents = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find().populate('category team1 team2');
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get Events by Category ID
const getEventsByCategoryId = asyncHandler(async (req, res) => {
  try {
    const { category } = req.params;
    const events = await Event.find({ category }).populate('category team1 team2');
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

module.exports = {
  createEvent,
  editEvent,
  deleteEvent,
  getAllEvents,
  getEventsByCategoryId,
};
