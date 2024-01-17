const Meal = require('../models/meal');


module.exports = {
  index,
  create,
  new: newMeal,
  delete: deleteMeal
};



async function deleteMeal(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const meal = await Meal.findOne({ 'meals._id': req.params.id, 'meals.user': req.user._id });
  // Rogue user!
  if (!meal) return res.redirect('/meals/new');
  // Remove the review using the remove method available on Mongoose arrays
  meal.meals.remove(req.params.id);
  // Save the updated movie doc
  await meal.save();
  // Redirect back to the movie's show view
  res.redirect(`/meals/${meal._id}`);
}


// async function deleteMeal(req, res) {
//   try {
//     const meal = await Meal.findOneAndDelete({ 'meal._id': req.params.id, 'meal.user': req.user._id });

//     if (!meal) {
//       return res.redirect('/meals');
//     }

//     res.redirect('/meals');
//   } catch (err) {
//     console.log(err);
//     res.redirect('/meals');
//   }
// }

async function newMeal(req, res) {
  const meals = await Meal.find({ user: { $ne: req.user._id } });

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


