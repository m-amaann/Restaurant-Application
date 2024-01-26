const Category = require('../models/Category');
const cloudinary = require('cloudinary').v2;
const DatauriParser = require('datauri/parser');
const multer = require('multer');
const path = require('path');

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer configuration for file upload
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image');

// Set up Datauri parser
const parser = new DatauriParser();
const formatBufferTo64 = file => parser.format(path.extname(file.originalname).toString(), file.buffer);

// Controller to create a new category
const createCategory = async (req, res) => {
  multerUploads(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: 'Image upload error' });
    }

    const { name } = req.body;

    try {
      let categoryImageUrl = '';
      if (req.file) {
        const file64 = formatBufferTo64(req.file);
        const uploadResult = await cloudinary.uploader.upload(file64.content, {
          folder: 'Category',
        });
        categoryImageUrl = uploadResult.secure_url;
      }

      // Create a new category record
      const category = new Category({
        name,
        image: categoryImageUrl,
      }).save();

      res.status(201).json({ success: true, categoryId: category._id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
};

// Controller to get all categories
const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error('Error getting all categories:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Controller to get category by ID
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.getCategoryById;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, error: 'Category not found' });
    }
    res.status(200).json({ success: true, category });
  } catch (error) {
    console.error('Error getting category by ID:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
  getCategoryById,
};
