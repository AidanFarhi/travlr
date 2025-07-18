const fs = require('fs')

// get the meals data from the JSON file
const mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'))

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {'title': 'Travlr Getaways', 'meals': mealsData})
}

module.exports = {
    meals
}