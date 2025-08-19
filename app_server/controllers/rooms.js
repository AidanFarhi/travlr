const fs = require('fs')

// get the rooms data from the JSON file
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'))

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {'title': 'Travlr Getaways', 'rooms': roomsData})
}

module.exports = {
    rooms
}