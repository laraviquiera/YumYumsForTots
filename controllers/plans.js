const Plan = require('../models/plan');
const Meal = require('../models/meal');

module.exports = {
    index,
    new: newDish
};

async function index(req, res) {
      const plans = await Plan.find({});
      res.render('plans/index', { title: 'Meal Planner', plans });
    }

    async function newDish(req, res) {
      res.render('plans/new', { errorMsg: '', title: 'Add A New Dish'});
  }
  