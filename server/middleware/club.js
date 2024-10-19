const clubMiddleware = (req, res, next) => {
    // Check if the user is logged in and is a club
    if (req.session.user && req.session.user.type === 'club') {
        next(); // User is a club, proceed to the next middleware/route handler
    } else {
        return res.status(403).json({ message: 'Access denied. Clubs only.' });
    }
  };
  
  module.exports = clubMiddleware;