const Plan = require('../models/plan');
const Meal = require('../models/meal');

module.exports = {
    create,
};

async function create(req, res) {
      const plan = await Plan.find({});
      res.render('/planner', { title: 'Meal Planner', meals });
    }
