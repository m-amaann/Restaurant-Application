const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { authenticateRefreshToken, authenticateToken } = require('../middleware/requireLogin');



router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh-token', authenticateRefreshToken, userController.refreshToken);

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getLoggedUser', authenticateToken, userController.getLoggedUser);

module.exports = router;
