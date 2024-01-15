const Plan = require('../models/plan');
const Meal = require('../models/meal');

module.exports = {
    index,
    new: newDish,
    create
};

async function create(req, res) {
  const { name, referenceURL, mealType } = req.body;
  
  if (!name) {
    return res.render('plans/new', { errorMsg: 'Dish name is required', title: 'Add A New Dish' });
  }

  const newMeal = new Meal({
    name,
    referenceURL,
    mealType
  });

  await newMeal.save();
  res.redirect('/plans/new');
}


async function index(req, res) {

  const meals = await Meal.find({});
    res.render('plans/index', { title: 'Meal Planner', meals });
 }

async function newDish(req, res) {
  const meals = await Meal.find({});

  res.render('plans/new', { errorMsg: '', title: 'Add A New Dish', meals});
 }
  