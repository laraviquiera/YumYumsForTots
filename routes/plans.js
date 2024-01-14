const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');
const mealsCtrl = require('../controllers/meals');

//GET /plans
router.post('/plans', plansCtrl.create);

//GET /plan/new (new plan)
// router.get('/plans/new', plansCtrl.new);

module.exports = router;
