const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /new/plans
router.get('/new', ensureLoggedIn, plansCtrl.new)
router.post('/new', ensureLoggedIn, plansCtrl.create);
router.get('/', ensureLoggedIn, plansCtrl.index);



module.exports = router;