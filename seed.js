// seed.js (a utility to seed/initialize the database)

require('dotenv').config();
require('./config/database');

const Meal = require('./models/meal');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');


// await needs an async function - use an async IIFE!
(async function() {
    // Save the promises (or call right in the array if feeling frisky)
    const p1 = Meal.deleteMany({});
    
    let results = await Promise.all([p1]);
    // results will be an array of result objects!
    console.log(results);
  
    // This time, provide the array of promises in-line
    results = await Promise.all([
      Meal.create(data.meals),
    ]);
    console.log('Created dish:', results[0]);
  
    process.exit();
  })();