const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining meal schema
const mealSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    referenceURL: String,
    mealType: {
      type: String,
      enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack']
    },
    favoredBy: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' // Reference to User model
    }]
  });

module.exports = mongoose.model('Meal', mealSchema);

