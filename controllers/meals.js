const Meal = require('../models/meal');


module.exports = {
  index,
  create,
  new: newDish
  delete: deleteDish
};

async function deleteDish(req, res) {
  try {
    const meal = await Meal.findOne({ '_id': req.params.id, 'user': req.user._id });

    if (!meal) {
      return res.redirect('/meals');
    }

    await meal.remove(req.params.id);

    res.redirect('/meals');
  } catch (err) {
    console.log(err);
    res.redirect('/meals');
  }
}

async function newDish(req, res) {
  const meals = await Meal.find({});

  res.render('meals/new', { errorMsg: '', title: 'Add A New Dish', meals});
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
  res.redirect('/plans/new');
}


async function index(req, res) {
  const meals = await Meal.find({$or: [{user: null}, {user: req.user._id}]});
  
  res.render('meals/index', { title: 'All Dishes', meals });
}


