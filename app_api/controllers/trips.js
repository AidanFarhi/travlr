const mongoose = require('mongoose')
const Trip = require('../models/travlr')
const Model = mongoose.model('trips')

// GET: /trips - lists all the trips
// Regardless of the outcome, the response will include an HTML status code
// and a JSON message to the client
const tripList = async(req, res) => {
    // no filter. return all records
    const q = await Model.find({}).exec()
    if (!q) {
        return res.status(404).json(err)
    }
    return res.status(200).json(q)
}

// GET: /trips/:tripCode - fetch a single trip
const tripsFindByCode = async(req, res) => {
    // return a single record
    const q = await Model.find({'code': req.params.tripCode}).exec()
    if (!q) {
        return res.status(404).json(err)
    }
    return res.status(200).json(q)
}

module.exports = {
    tripList,
    tripsFindByCode
}
