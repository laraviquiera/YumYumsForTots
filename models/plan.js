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
    monBrkURL: String,
    monLun: String,
    monLunURL: String,
    monDin: String,
    monDinURL: String,
    monSnk: String,
    monSnkURL: String,
    //tuesday
    tueBrk: String,
    tueBrkURL: String,
    tueLun: String,
    tueLunURL: String,
    tueDin: String,
    tueDinURL: String,
    tueSnk: String,
    tueSnkURL: String,
    //wednesday
    wedBrk: String,
    wedBrkURL: String,
    wedLun: String,
    wedLunURL: String,
    wedDin: String,
    wedDinURL: String,
    wedSnk: String,
    wedSnkURL: String,
    //thursday
    thuBrk: String,
    thuBrkURL: String,
    thuLun: String,
    thuLunURL: String,
    thuDin: String,
    thuDinURL: String,
    thuSnk: String,
    thuSnkURL: String,
    //friday
    friBrk: String,
    friBrkURL: String,
    friLun: String,
    friLunURL: String,
    friDin: String,
    friDinURL: String,
    friSnk: String,
    friSnkURL: String,
    //saturday
    satBrk: String,
    satBrkURL: String,
    satLun: String,
    satLunURL: String,
    satDin: String,
    satDinURL: String,
    satSnk: String,
    satSnkURL: String,
    //sunday
    sunBrk: String,
    sunBrkURL: String,
    sunLun: String,
    sunLunURL: String,
    sunDin: String,
    sunDinURL: String,
    sunSnk: String,
    sunSnkURL: String
  });
  
  // Create and export the Plan model
  module.exports = mongoose.model('Plan', planSchema);