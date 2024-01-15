const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '30m' } // Access token expires in 30 minutes
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_REFRESH_SECRET_KEY,
    { expiresIn: '7d' } // Refresh token expires in 7 days
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
