const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mealSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      default: null
    },
    name: {  //dish name
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

