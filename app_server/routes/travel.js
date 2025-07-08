const express = require('express')
const router = express.Router()
const travelController = require('../controllers/travel')

/* GET home page. */
router.get('/', travelController.travel)

module.exports = router
