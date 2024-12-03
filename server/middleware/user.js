const userMiddleware = (req, res, next) => {
    // Check if the user is logged in
    if (req.session.user) {
        next(); // User is logged in, proceed to next router/middleware
    } else {
        return res.status(403).json({ message: 'Access denied. Users only.' });
    }
  };
  
  module.exports = userMiddleware;