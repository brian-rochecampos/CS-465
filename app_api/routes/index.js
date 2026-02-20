const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

router.post('/login', authController.login);

router.get('/admin', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the admin panel' });
});

module.exports = router;