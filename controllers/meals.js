const Meal = require('../models/meal');


module.exports = {
  index,
  create,
  new: newMeal,
  delete: deleteMeal
};



async function deleteMeal(req, res) {
  await Meal.findOneAndDelete(
    // Query object that ensures the meal was created by the logged in user
    {_id: req.params.id, user: req.user._id}
  );
  res.redirect('/meals/new');
}


async function newMeal(req, res) {
  const meals = await Meal.find({ user: req.user._id }).sort('name');
  res.render('meals/new', { errorMsg: '', title: 'Add A New Dish', meals});
 }


async function create(req, res) {
  const { name, mealType } = req.body;
  
  if (!name) {
    return res.render('plans/new', { errorMsg: 'Dish name is required', title: 'Add A New Dish' });
  }

  const newMeal = new Meal({
    user: req.user._id,
    name,
    mealType
  });

  await newMeal.save();
  res.redirect('/plans/new');
}


async function index(req, res) {
  const meals = await Meal.find({ $or: [{ user: null }, { user: req.user._id }] });
  
  res.render('meals/index', { title: 'All Dishes', meals });
}


