const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    title: String, //plan name
    //monday
    monBrk: String,
    monLun: String,
    monDin: String,
    monSnk: String,
    //tuesday
    tueBrk: String,
    tueLun: String,
    tueDin: String,
    tueSnk: String,
    //wednesday
    wedBrk: String,
    wedLun: String,
    wedDin: String,
    wedSnk: String,
    //thursday
    thuBrk: String,
    thuLun: String,
    thuDin: String,
    thuSnk: String,
    //friday
    friBrk: String,
    friLun: String,
    friDin: String,
    friSnk: String,
    //saturday
    satBrk: String,
    satLun: String,
    satDin: String,
    satSnk: String,
    //sunday
    sunBrk: String,
    sunLun: String,
    sunDin: String,
    sunSnk: String,
  });
  
  // Create and export the Plan model
  module.exports = mongoose.model('Plan', planSchema);