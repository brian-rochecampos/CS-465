const express = require('express');
const router = express.Router();
const tripController = require('../controllers/trip');

router.get('/trips', tripController.getAllTrips);
router.get('/trips/:tripId', tripController.getTripById);

module.exports = router;
