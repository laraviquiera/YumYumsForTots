const Plan = require('../models/plan');
const Meal = require('../models/meal');

module.exports = {
    index
};

async function index(req, res) {
      const plans = await Plan.find({});
      res.render('plans/index', { title: 'Meal Planner', plans });
    }
