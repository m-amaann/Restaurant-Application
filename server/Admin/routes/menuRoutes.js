const express = require('express');
const menuController = require('../controller/menuController');

const router = express.Router();

router.post('/create', menuController.createMenu);
router.get('/all', menuController.getAllMenus);
router.get('/:id', menuController.getMenuById);
router.get('/category/:id', menuController.getMenuByCategoryId);

module.exports = router;
