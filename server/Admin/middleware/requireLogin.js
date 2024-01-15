const jwt = require('jsonwebtoken');
const User = require('../Models/User');

// authenticate access token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Unauthorized: Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

// Middleware to authenticate refresh token
const authenticateRefreshToken = (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ error: 'Unauthorized: No refresh token provided' });
  }

  jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Unauthorized: Invalid refresh token' });
    }
    // If you want to ensure that the user still exists in the database,
    // you should uncomment the following lines and ensure your User model is correct
    
    User.findById(decoded.userId, (err, user) => {
      if (err || !user) {
        return res.status(403).json({ error: 'Unauthorized: Invalid refresh token' });
      }
      req.user = user;
      next();
    });
    

    // Otherwise, just pass the decoded data
    req.user = decoded;
    next();
  });
};

module.exports = {
  authenticateToken,
  authenticateRefreshToken,
};
