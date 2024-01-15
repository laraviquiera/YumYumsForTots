const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /plans
router.get('/', ensureLoggedIn, plansCtrl.index);
// GET /new
router.get('/new', ensureLoggedIn, plansCtrl.new)
//POST /new
router.post('/', ensureLoggedIn, plansCtrl.create);
//DELETE
router.delete('/plans/:id', ensureLoggedIn, plansCtrl.delete);


module.exports = router;
