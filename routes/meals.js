const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, mealsCtrl.create);
router.get('/', ensureLoggedIn, mealsCtrl.index);
//GET /meals/new
router.get('/new', ensureLoggedIn, mealsCtrl.new)
router.delete('/:id', ensureLoggedIn, mealsCtrl.delete);
//GET /meals/:id/edit
router.get('/:id/edit', ensureLoggedIn, mealsCtrl.edit);
//PUT /meals/:id
router.put('/:id', ensureLoggedIn, mealsCtrl.update);

module.exports = router;