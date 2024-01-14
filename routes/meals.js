const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

//GET /meals
router.get('/', mealsCtrl.index);
//GET /meals/view-all

module.exports = router;
