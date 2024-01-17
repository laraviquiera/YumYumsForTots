const Meal = require('../models/meal');

module.exports = {
    new: newPlan,
};



async function newPlan(req, res) {
  const meals = await Meal.find({});
    res.render('plans/new', { title: 'Meal Planner', meals });
 }