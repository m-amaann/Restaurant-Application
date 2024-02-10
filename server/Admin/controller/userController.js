const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');
const User = require('../Models/User');
const nodemailer = require("nodemailer");

const { generateAccessToken, generateRefreshToken } = require('../middleware/token');



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


// Register User
exports.register = async (req, res) => {
  multerUploads(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Image upload error' });
    }

    const { name, email, password, phone, address } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Upload image to Users folder
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

      var transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ea205228635773",
          pass: "264f5239321ac0",
        },
      });

      var mailOptions = 
      {
        from: "amaanrc11@gmail.com",
        to: email,
        subject: "Registered An Account",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f4f4f4;
            }
        
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
        
            h2 {
              color: #333;
            }
        
            p {
              color: #555;
            }
        
            ul {
              list-style: none;
              padding: 0;
            }
        
            li {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Thank you for registering an account with us!</h2>
            <p>Your account details:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Address:</strong> ${address}</li>
            </ul>
            <p>We look forward to serving you!</p>
          </div>
        </body>
        </html>        
  `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          return res.json({
            message: "User account has been registered sucessfully!",
          });
        }
      });

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


// Refresh token route access 
exports.refreshToken = (req, res) => {
  try {
    const accessToken = generateAccessToken({ id: req.userId });

    res.json({ accessToken });
  } catch (error) {
    console.error('Error generating access token:', error);
    res.status(403).json({ error: 'Could not refresh access token' });
  }
};



// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};



// Get data of the currently logged-in user
exports.getLoggedUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      profileImage: user.profileImage,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching user data' });
  }
};
