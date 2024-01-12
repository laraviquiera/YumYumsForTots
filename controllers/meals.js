const Meal = require('../models/meal');  //import meal model
const Plan = require('../models/meal').Plan; //import plan model

module.exports = {
    index
};

async function index(req, res) {
    try {
        const allMeals = await Meal.find(); //fetch all meals from the database
        const allPlans = await Plan.find(); //featch all planss from the database

        //render a view passing fetched meals and plans to the view template
        res.render('index', { meals: allMeals, plans: allPlans });
    } catch (err) {
        console.log(err);
        res.render('meals/index', { errorMsg: error.message })
    }
}