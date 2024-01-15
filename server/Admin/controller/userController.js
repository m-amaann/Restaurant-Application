const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');
const User = require('../Models/User');

const { generateAccessToken, generateRefreshToken } = require('../middleware/token'); // Update the path to your token utility functions


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up Multer for memory storage
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('profileImage');

// Set up Datauri parser
const parser = new DatauriParser();
const formatBufferTo64 = file => parser.format(path.extname(file.originalname).toString(), file.buffer);


// Register a new user
exports.register = async (req, res) => {
  multerUploads(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Image upload error' });
    }

    const { name, email, password, phone, address } = req.body;

    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Upload the profile image to Cloudinary Users folder
      let profileImageUrl = '';
      if (req.file) {
        const file64 = formatBufferTo64(req.file);
        const uploadResult = await cloudinary.uploader.upload(file64.content, {
          folder: 'Users'
        });
        profileImageUrl = uploadResult.secure_url;
      }

      // Create and save the user
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        profileImage: profileImageUrl,
        phone,
        address
      }).save();

      res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
};



//Login Function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.json({
      message: 'Login successful',
      accessToken,
      refreshToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profileImage: user.profileImage
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during authentication', error: error.message });
  }
};


// Refresh token route access handle
exports.refreshToken = (req, res) => {
  try {
    const accessToken = generateAccessToken({ id: req.userId });

    res.json({ accessToken });
  } catch (error) {
    console.error('Error generating access token:', error);
    res.status(403).json({ error: 'Could not refresh access token' });
  }
};