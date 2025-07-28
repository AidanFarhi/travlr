const express = require('express')
const router = express.Router()

const tripsController = require('../controllers/trips')

// GET - fetches all trips
router.route('/trips').get(tripsController.tripList)

// GET - fetches a trip based on tripCode request param
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode)

module.exports = router
