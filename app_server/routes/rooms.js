const express = require('express')
const router = express.Router()
const roomsController = require('../controllers/rooms')

/* GET rooms page. */
router.get('/', roomsController.rooms)

module.exports = router
