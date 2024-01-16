const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /meals
router.get('/', ensureLoggedIn, mealsCtrl.index);


module.exports = router;
