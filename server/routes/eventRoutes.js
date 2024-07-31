const express = require('express');
const {
  createEvent,
  editEvent,
  deleteEvent,
  getAllEvents,
  getEventsByCategoryId,
} = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');
const { validateEvent } = require('../middleware/validationMiddleware');
const isAdmin = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/create', protect, isAdmin, validateEvent, createEvent);
router.put('/edit/:id', protect, isAdmin, editEvent);
router.delete('/delete/:id', protect, isAdmin, deleteEvent);
router.get('/all', getAllEvents);
router.get('/filter-by-category/:categoryId', getEventsByCategoryId);

module.exports = router;
