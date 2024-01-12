const Meal = require('../models/meal');


module.exports = {
    index
};

async function index(req, res) {
    try {
        const allMeals = await Meal.find(); 

        //render a view passing fetched meals and plans to the view template
        res.render('index', { title: 'Home Page', meals: allMeals });
    } catch (err) {
        console.log(err);
        res.render('meals/index', { errorMsg: error.message })
    }
}