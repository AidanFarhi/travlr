const express = require('express')
const router = express.Router()
const mealsController = require('../controllers/meals')

/* GET meals page. */
router.get('/', mealsController.meals)

module.exports = router
