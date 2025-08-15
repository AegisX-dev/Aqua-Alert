const express = require('express');
const userController = require('../controllers/user.controllers'); // Fixed path
const { authenticateToken } = require('../middlewares/auth.middleware'); // Fixed path

const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/anonymous', userController.createAnonymous);

// Protected routes (require authentication)
router.get('/profile', authenticateToken, userController.getProfile);
router.put('/profile', authenticateToken, userController.updateProfile);
router.delete('/account', authenticateToken, userController.deleteAccount);

module.exports = router;