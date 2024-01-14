const Meal = require('../models/meal');


module.exports = {
  index,
};

async function index(req, res) {
  const meals = await Meal.find();
  res.render('meals/index', { title: 'All Dishes', meals });
}
