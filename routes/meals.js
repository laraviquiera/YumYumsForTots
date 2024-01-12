const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

//GET /meals
router.get('/', mealsCtrl.index);

module.exports = router;
