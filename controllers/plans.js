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
  const meals = await Meal.find({});
    res.render('plans/new', { title: 'Meal Planner', meals });
 }