const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { authenticateRefreshToken } = require('../middleware/requireLogin');



router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/refresh-token', authenticateRefreshToken, userController.refreshToken);

module.exports = router;
