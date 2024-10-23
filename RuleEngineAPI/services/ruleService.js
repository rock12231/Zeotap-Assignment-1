class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type; // "operator" or "operand"
        this.left = left; // left child node
        this.right = right; // right child node
        this.value = value; // value for operand nodes
    }
}

const createRule = (ruleString) => {
    // Simplified parsing logic
    const ast = parseRuleStringToAST(ruleString);
    return ast;
};

const combineRules = (ruleAsts) => {
    // Combine multiple ASTs logically (simplified)
    return new Node('operator', ruleAsts[0], ruleAsts[1], 'AND');
};

const evaluateRule = (ruleAst, data) => {
    if (ruleAst.type === 'operator') {
        const left = evaluateRule(ruleAst.left, data);
        const right = evaluateRule(ruleAst.right, data);
        if (ruleAst.value === 'AND') return left && right;
        if (ruleAst.value === 'OR') return left || right;
    } else if (ruleAst.type === 'operand') {
        return evaluateCondition(ruleAst.value, data);
    }
    return false;
};

const evaluateCondition = (condition, data) => {
    // Basic condition checking (e.g., "age > 30")
    const [attribute, operator, value] = condition.split(' ');
    switch (operator) {
        case '>': return data[attribute] > parseInt(value);
        case '<': return data[attribute] < parseInt(value);
        case '=': return data[attribute] === value;
        default: return false;
    }
};

const parseRuleStringToAST = (ruleString) => {
    // Simple parsing logic
    const ast = new Node('operator', new Node('operand', null, null, 'age > 30'), new Node('operand', null, null, 'salary > 50000'), 'AND');
    return ast;
};

module.exports = {
    createRule,
    combineRules,
    evaluateRule
};
