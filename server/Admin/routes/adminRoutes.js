const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');



router.post('/login', adminController.login);
router.get('/logout', adminController.logout);
router.get('/getAllAdmins', adminController.getAllAdmins); 
router.get('/getAdminById/:id', adminController.getAdminById); 
router.post('/createAdmin', adminController.createAdmin); 



module.exports = router;
