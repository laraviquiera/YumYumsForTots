const Meal = require('../models/meal');
const Plan = require('../models/plan');

module.exports = {
    new: newPlan,
    create,
    index
};


async function index(req, res) {
  const userPlans = await Plan.find({ user: req.user._id });
  res.render('plans/index', { title: '', userPlans });
}

async function create(req, res) {
  const { title, monBrk, monLun, monDin, monSnk, tueBrk, tueLun, tueDin, tueSnk, 
    wedBrk, wedLun, wedDin, wedSnk, thuBrk, thuLun, thuDin, thuSnk, friBrk, friLun,
    friDin, friSnk, satBrk, satLun, satDin, satSnk, sunBrk, sunLun, sunDin, sunSnk } = req.body;

    const plan = new Plan({
      user: req.user._id, title,
      monBrk, monLun, monDin, monSnk,
      tueBrk, tueLun, tueDin, tueSnk,
      wedBrk, wedLun, wedDin, wedSnk,
      thuBrk, thuLun, thuDin, thuSnk,
      friBrk, friLun, friDin, friSnk,
      satBrk, satLun, satDin, satSnk,
      sunBrk, sunLun, sunDin, sunSnk
  });
  
  await plan.save();
  
  res.redirect('/plans');
}


 async function newPlan(req, res) {
  // Use the same query as in the meals index action to prevent users from seeing other user's custom meals
  const meals = await Meal.find({ $or: [{ user: null }, { user: req.user._id }] }).sort('name');
  // options object will have a property for each mealType
  const options = {};
  for (let mealType of ['Breakfast', 'Lunch', 'Dinner', 'Snack']) {
    options[mealType] = meals.filter(meal => meal.mealType === mealType)
      // Going to send the meal's name & referenceURL combined because the planSchema needs both
      .map(meal => `<option value="${meal.name}|${meal.referenceURL}">${meal.name$}</option>`).join('');
  }
  res.render('plans/new', { title: 'Meal Planner', options });
}