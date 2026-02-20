const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/traveler');

router.get('/', travelerController.getHomePage);
router.get('/travel', travelerController.getTravelPage);
router.get('/rooms', travelerController.getRoomsPage);
router.get('/meals', travelerController.getMealsPage);
router.get('/news', travelerController.getNewsPage);
router.get('/about', travelerController.getAboutPage);
router.get('/contact', travelerController.getContactPage);

module.exports = router;