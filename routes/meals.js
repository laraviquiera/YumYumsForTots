const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /meals/new
router.post('/new', ensureLoggedIn, mealsCtrl.create);
router.get('/', ensureLoggedIn, mealsCtrl.index);
router.get('/new', ensureLoggedIn, mealsCtrl.new)
// router.delete('/meals/:id', ensureLoggedIn, mealsCtrl.delete);

module.exports = router;