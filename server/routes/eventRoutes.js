const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const clubMiddleware = require('../middleware/club');


// Route to get list of all events of logged in club
router.get('/all-events/:clubid', eventController.getAllEvents);

// Route to get details of specific club
router.put('/upsert-event/', clubMiddleware, eventController.upsertEvent);

// Route to delete a specific event
router.delete('/delete-event/:id', clubMiddleware, eventController.deleteEvent);

module.exports = router;