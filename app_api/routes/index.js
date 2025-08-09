const express = require('express')
const router = express.Router()

const tripsController = require('../controllers/trips')

// define a route for our trips endpoint
router.route('/trips')
    .get(tripsController.tripsList)     // GET method routes tripList
    .post(tripsController.tripsAddTrip) // POST method adds a trip


// define a route for trips/:tripCode endpoint
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)   // GET - fetches a trip based on tripCode request param
    .put(tripsController.tripUpdateTrip)    // PUT - updates a trip based on tripCode request param

module.exports = router
