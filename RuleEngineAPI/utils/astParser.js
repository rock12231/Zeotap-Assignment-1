class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  function createAST(ruleString) {
    // Simplified parser logic (in practice, you would parse it properly)
    // Parsing "age > 30 AND department = 'Sales'"
    const ageCondition = new Node('operand', null, null, { attribute: 'age', operator: '>', value: 30 });
    const departmentCondition = new Node('operand', null, null, { attribute: 'department', operator: '=', value: 'Sales' });
    
    const andNode = new Node('operator', ageCondition, departmentCondition, 'AND');
    
    return andNode;
  }
  
  module.exports = {
    createAST,
  };
  