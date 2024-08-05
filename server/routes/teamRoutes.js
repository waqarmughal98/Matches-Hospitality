const express = require('express');
const {
  createTeam,
  editTeam,
  deleteTeam,
  getAllTeams,
  getTeamsByCategoryId
} = require('../controllers/teamController');
const { validateTeam } = require('../middleware/validationMiddleware');
const protect = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const isAdmin = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/create', protect, isAdmin ,upload.single('logo'), validateTeam, createTeam);
router.put('/edit/:id', protect, isAdmin, upload.single('logo'), editTeam);
router.delete('/delete/:id', protect, isAdmin, deleteTeam);
router.get('/all', protect, getAllTeams);
router.get('/filter-by-category/:categoryId', protect, getTeamsByCategoryId);

module.exports = router;
