const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const clubMiddleware = require('../middleware/club');


// Route to get list of all events of logged in club
router.get('/all-events/:clubid', clubMiddleware, eventController.getAllEvents);

// Route to get details of specific club
router.post('/add-event', clubMiddleware, eventController.insertNewEvent);

// Route to update existing event
router.post('/update-event', clubMiddleware, eventController.updateEvent);

module.exports = router;