const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// Login controller
exports.login = async (req, res) => {
  if(req.session.user){
    return res.status(401).json({ message: 'Already logged in' });
  }
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
    req.session.user = {uid: user.id, username: user.username, type: user.type};

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

//logout controller
exports.logout = (req, res) => {
    req.session.destroy((err) => {
    if (err) {
        return res.status(500).json({ message: 'Could not log out' });
    }
    return res.status(200).json({ message: 'Logout successful' });
    });
};

//password change controller
exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    try{
        const user = await userModel.getUserByUserName(req.session.user.username);
        const match = await bcrypt.compare(oldPassword, user.password);
        if(!match){
            return res.status(401).json({ message: 'Old password doesn\'t match' });
        }
        
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        await userModel.updatePassword(req.session.user.username, hashedPassword);
        return res.status(200).json({ message: 'Password changed successfully'});
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
