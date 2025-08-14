const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const tripsController = require('../controllers/trips')
const authController = require('../controllers/authentication')

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    console.log('In Middleware')
    const authHeader = req.headers['authorization']

    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!')
        return res.sendStatus(401)
    }

    let headers = authHeader.split(' ')
    if (headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length)
        return res.sendStatus(501)
    }

    const token = authHeader.split(' ')[1]

    if (token == null) {
        console.log('Null Bearer Token')
        return res.sendStatus(401)
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!')
        }
        req.auth = verified // set the auth param to the decoded object
    })

    next() // We need to continue or this will hang forever
}

// define auth routes
router.route('/register')
    .post(authController.register)

router.route('/login')
    .post(authController.login)

// define a route for our trips endpoint
router.route('/trips')
    .get(tripsController.tripsList)                      // GET method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip) // POST method adds a trip

// define a route for trips/:tripCode endpoint
router.route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)                 // GET - fetches a trip based on tripCode request param
    .put(authenticateJWT, tripsController.tripUpdateTrip) // PUT - updates a trip based on tripCode request param 

module.exports = router
