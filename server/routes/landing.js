const express = require('express');
const router = express.Router();
const landingController = require('../controllers/landing');
const adminMiddleware = require('../middleware/admin')

// Fetch updates
router.get('/updates', landingController.getUpdates);

// Fetch statistics
router.get('/statistics', landingController.getStatistics);

// Upsert update (insert or update)
router.post('/updates', adminMiddleware, landingController.upsertUpdate);

// Delete update
router.delete('/updates/:id', adminMiddleware, landingController.deleteUpdate);

module.exports = router;
