const express = require('express');
const authController = require('../controllers/authController');
const userMiddleware = require('../middleware/user');
const clubMiddleware = require('../middleware/club');

const router = express.Router();

// Login route
// returns message and user type (redirect to corresponding dahsboard)
router.post('/login', authController.login);

// Logout route
// returns message
router.post('/logout', userMiddleware, authController.logout);

// Password change route
// returns message
router.post('/change-password', userMiddleware, authController.changePassword);

module.exports = router;
