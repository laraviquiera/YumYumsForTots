const Meal = require('../models/meal');


module.exports = {
  index,
  create,
  new: newMeal,
  delete: deleteMeal
};

async function deleteMeal(req, res) {
  try {
    const meal = await Meal.findOneAndDelete({ '_id': req.params.id, 'user': req.user._id });

    if (!meal) {
      return res.redirect('/meals');
    }

    res.redirect('/meals');
  } catch (err) {
    console.log(err);
    res.redirect('/meals');
  }
}

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

// async function index(req, res) {
//   try {
//     // Fetch all meals except those created by the current user
//     const meals = await Meal.find({ user: { $ne: req.user._id } });

//     res.render('meals/index', { meals });
//   } catch (err) {
//     console.error(err);
//     res.redirect('/'); // or render the page with an error message
//   }
// }


