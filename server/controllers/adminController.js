const bcrypt = require('bcrypt');
const userModel = require('../models/userModel')

// Create a new club
exports.createClub = async (req, res) => {
  const { username, password } = req.body;

  // Input validation
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await userModel.getUserByUserName(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password with 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    // Insert the new user into the database
    userModel.insertUser(username, hashedPassword, "club");
    
    return res.status(201).json({ message: 'User created successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
