const Meal = require('../models/meal');
const Plan = require('../models/plan');


module.exports = {
  index,
};

async function index(req, res) {
  const meals = await Meal.find({$or: [{user: null}, {user: req.user._id}]});
  
  res.render('meals/index', { title: 'All Dishes', meals });
}