const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');
const clubMiddleware = require('../middleware/club');
const upload = require('../middleware/upload');

// Route for updating club information
router.post('/update-info', clubMiddleware, upload.fields([{ name: 'logo' }]), clubController.updateClub);

// Route to get list of all clubs
router.get('/all-clubs', clubController.getAllClubs);

// Route to get details of specific club
router.get('/club-info/:clubid', clubController.getClub);

module.exports = router;