const express = require('express');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.post('/createCategory', categoryController.createCategory);
router.get('/getAllCategory', categoryController.getAllCategory);
router.get('/:getCategoryById', categoryController.getCategoryById);

module.exports = router;
