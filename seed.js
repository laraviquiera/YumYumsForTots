// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Meal = require('./models/meal');
const Plan = require('./models/plan');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');


// await needs an async function - use an async IIFE!
(async function() {
    // Save the promises (or call right in the array if feeling frisky)
    const p1 = Meal.deleteMany({});
    const p2 = Plan.deleteMany({});
    
    // Promise.all will return a single promise that resolves
    // only after all of the array's promises resolve
    let results = await Promise.all([p1, p2]);
    // results will be an array of result objects!
    console.log(results);
  
    // This time, provide the array of promises in-line
    // results = await Promise.all([
    //   Meals.create(data.meals),
    //   Plans.create(data.plans)
    // ]);
    // console.log('Created dish:', results[0]);
    // console.log('Created plans', results[1]);
  
//     // Associate Mark Hamill with Star Wars - A New Hope
//     results = await Promise.all([
//       // Using regular expressions allows a partial match
//       Meal.findOne({ title: /Star / }),
//       Plans.findOne({ name: /Mark / })
//     ]);
//     // One day we'll destructure results like this: const [starWars, mark] = results;
//     const starWars = results[0];
//     const mark = results[1];
//     starWars.cast.push(mark._id);
//     await starWars.save();
//     console.log('Star Wars with Mark Hamill', starWars);
  
    // Lastly, use process.exit() to "cleanly" shut down the Node program
    process.exit();
  })();