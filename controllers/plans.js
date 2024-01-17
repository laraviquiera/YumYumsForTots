const Meal = require('../models/meal');
const Plan = require('../models/plan');

module.exports = {
    new: newPlan,
    create,
    index,
    show
};


async function show(req, res) {
  const plan = await Plan.findById(req.params.id);
  res.render('plans/show', { title: '', plan });
}

async function index(req, res) {
  const userPlans = await Plan.find({ user: req.user._id });
  res.render('plans/index', { title: '', userPlans });
}

async function create(req, res) {
  req.body.user = req.user._id;
  try {
    Plan.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/plans');
}


 async function newPlan(req, res) {
  // Use the same query as in the meals index action to prevent users from seeing other user's custom meals
  const meals = await Meal.find({ $or: [{ user: null }, { user: req.user._id }] }).sort('-user name');
  // options object will have a property for each mealType
  const options = {};
  for (let mealType of ['Breakfast', 'Lunch', 'Dinner', 'Snack']) {
    options[mealType] = meals.filter(meal => meal.mealType === mealType)
      // Going to send the meal's name & referenceURL combined because the planSchema needs both
      .map(meal => `<option value="${meal.name}">${!meal.user ? '' : '⭐'}${meal.name}</option>`).join('');
  }
  res.render('plans/new', { title: 'Meal Planner', options });
}