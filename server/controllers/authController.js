const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// Login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUserName(username);

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check the password (assuming you have hashed the password using bcrypt when creating users)
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Save user info to session
    req.session.userId = user.id;
    req.session.username = user.username;

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

//logout controller
exports.logout = (req, res) => {
    // Check if there is an active session
    if (req.session.user) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Could not log out' });
        }
        return res.status(200).json({ message: 'Logout successful' });
      });
    } else {
      // If no active session, return a message indicating the user is already logged out
      return res.status(400).json({ message: 'No user is currently logged in' });
    }
  };
