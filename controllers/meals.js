const Meal = require('../models/meal');


module.exports = {
  index,
  create,
  new: newMeal,
  delete: deleteMeal,
  edit,
  update
};

async function update(req, res) {
  try {
    const updatedMeal = await Meal.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      // update object with updated properties
      req.body,
      // options object {new: true} returns updated doc
      {new: true}
    );
  } catch (e) {
    console.log(e.message);
  }
  return res.redirect('/plans/new');
}

async function edit(req, res) {
  const meal = await Meal.findOne({_id: req.params.id, user: req.user._id});
  if (!meal) return res.redirect('/meals');
  res.render('meals/edit', { title: 'Edit Dish', meal });
}

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
  const meals = await Meal.find({ user: null });
  res.render('meals/index', { title: 'All Dishes', meals });
}


