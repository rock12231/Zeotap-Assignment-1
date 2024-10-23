const express = require('express');
const { createRuleHandler, combineRulesHandler, evaluateRuleHandler } = require('../controllers/ruleController');

const router = express.Router();

router.post('/create', createRuleHandler);
router.post('/combine', combineRulesHandler);
router.post('/evaluate', evaluateRuleHandler);

module.exports = router;
