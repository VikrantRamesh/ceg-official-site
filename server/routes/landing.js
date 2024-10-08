const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing');  // Import controller

router.get('/updates', landingController.getUpdates);

router.get('/statistics', landingController.getStatistics);


module.exports = router;
