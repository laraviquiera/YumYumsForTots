const Meal = require('../models/meal');
const Plan = require('../models/plan');

module.exports = {
    index,
    new: newDish,
    create,
    delete: deleteDish
};

async function deleteDish(req, res) {
  try {
    const meal = await Meal.findOne({ '_id': req.params.id, 'user': req.user._id });

    if (!meal) {
      return res.redirect('/plans');
    }

    await meal.remove(req.params.id);

    res.redirect('/plans');
  } catch (err) {
    console.log(err);
    res.redirect('/plans');
  }
}



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
  res.redirect('/plans');
}


async function index(req, res) {

  const meals = await Meal.find({});
    res.render('plans/index', { title: 'Meal Planner', meals });
 }

async function newDish(req, res) {
  const meals = await Meal.find({});

  res.render('plans/new', { errorMsg: '', title: 'Add A New Dish', meals});
 }