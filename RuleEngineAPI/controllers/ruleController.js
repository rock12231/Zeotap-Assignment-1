const { createRule, combineRules, evaluateRule } = require('../services/ruleService');
const { saveRule, getRuleById } = require('../models/ruleModel');

// API to create a rule
const createRuleHandler = async (req, res) => {
    const { ruleString } = req.body;
    const ruleAst = createRule(ruleString);
    const ruleId = await saveRule(ruleAst, ruleString);
    res.json({ success: true, ruleId });
};

// API to combine rules
const combineRulesHandler = async (req, res) => {
    const { ruleStrings } = req.body;
    const ruleAsts = ruleStrings.map(createRule);
    const combinedAst = combineRules(ruleAsts);
    res.json({ combinedAst });
};

// API to evaluate a rule against user data
const evaluateRuleHandler = async (req, res) => {
    const { ruleId, data } = req.body;
    const rule = await getRuleById(ruleId);
    const result = evaluateRule(rule.rule_ast, data);
    res.json({ result });
};

module.exports = {
    createRuleHandler,
    combineRulesHandler,
    evaluateRuleHandler
};
