const Meal = require('../models/meal');

module.exports = {
    new: newPlan,
    create
};

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