const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const handleError = require('../utils/errorHandler');


// Create Event
const createEvent = asyncHandler(async (req, res) => {
  try {
    const { categoryId, team1Id, team2Id, date, time, packages } = req.body;

    const newEvent = new Event({
      categoryId,
      team1Id,
      team2Id,
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
    const { categoryId, team1Id, team2Id, date, time, packages } = req.body;

    const updateFields = {
      ...(categoryId && { categoryId }),
      ...(team1Id && { team1Id }),
      ...(team2Id && { team2Id }),
      ...(date && { date }),
      ...(time && { time }),
      ...(packages && { packages }),
    };

    const updatedEvent = await Event.findByIdAndUpdate(id, updateFields, { new: true });

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
    const events = await Event.find();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    handleError(res, 400, 'Something went wrong');
  }
});

// Get Events by Category ID
const getEventsByCategoryId = asyncHandler(async (req, res) => {
  try {
    const { categoryId } = req.params;
    const events = await Event.find({ categoryId });
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
