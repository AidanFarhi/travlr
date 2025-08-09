const mongoose = require('mongoose')
const Trip = require('../models/travlr')
const Model = mongoose.model('trips')

// GET: /trips - lists all the trips
// Regardless of the outcome, the response will include an HTML status code
// and a JSON message to the client
const tripsList = async(req, res) => {
    try {
        // no filter - return all records
        const q = await Model.find({}).exec()
        if (q.length == 0) {
            return res.status(404).json([])
        }
        return res.status(200).json(q)
    } catch (err) { 
        return res.status(500).json(err)
    }
}

// GET: /trips/:tripCode - fetch a single trip
const tripsFindByCode = async(req, res) => {
    try {
        // return a single record
        const q = await Model.find({'code': req.params.tripCode}).exec()
        if (q.length == 0) {
            return res.status(404).json([])
        }
        return res.status(200).json(q)
    } catch (err) { 
        return res.status(500).json(err)
    }
}

// POST: /trips - adds a new trip
// regardless of the outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    })
    
    const q = await newTrip.save()

    if (!q) { // database returned no data
        return res.status(400).json(err)
    } else {
        return res.status(201).json(q)
    }
}

// PUT: /trips/:tripCode - adds a new Trip
// regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripUpdateTrip = async(req, res) => {
    const q = await Model.findOneAndUpdate(
        { 'code' : req.params.tripCode },
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }
    ).exec();

    if (!q) { // database returned no data
        return res.status(400).json(err)
    } else {
        return res.status(201).json(q)
    }
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripUpdateTrip
}
