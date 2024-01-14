const express = require('express');
const router = express.Router();
const plansCtrl = require('../controllers/plans');

//GET /plans
router.get('/', plansCtrl.index);

//GET /plan/new (new plan)
// router.get('/plans/new', plansCtrl.new);

module.exports = router;
