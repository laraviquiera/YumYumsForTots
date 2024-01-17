const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /plans/new
router.get('/new', ensureLoggedIn, plansCtrl.new)
router.post('/', ensureLoggedIn, plansCtrl.create);
router.get('/', ensureLoggedIn, plansCtrl.index);
// GET /plans/:id (show)
router.get('/:id', ensureLoggedIn, plansCtrl.show);



module.exports = router;