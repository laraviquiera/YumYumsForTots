const Meal = require('../models/meal');
const Plan = require('../models/plan');


module.exports = {
  index
};

async function index(req, res) {
  const meals = await Meal.find({});
  res.render('meals/index', { title: 'All Dishes', meals });
}
