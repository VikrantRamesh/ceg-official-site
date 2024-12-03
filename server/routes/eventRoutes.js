const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const clubMiddleware = require('../middleware/club');


// Route to get list of all events of logged in club
router.get('/all-events', clubMiddleware, eventController.getAllEvents);

// Route to get details of specific club
router.post('/add-event', clubMiddleware, eventController.insertNewEvent);

module.exports = router;