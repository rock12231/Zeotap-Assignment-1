const pool = require('../config/database');

const saveRule = async (ruleAst, ruleString) => {
    const query = 'INSERT INTO rules (rule_ast, rule_string) VALUES ($1, $2) RETURNING id';
    const values = [ruleAst, ruleString];
    const result = await pool.query(query, values);
    return result.rows[0].id;
};

const getRuleById = async (id) => {
    const query = 'SELECT * FROM rules WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = {
    saveRule,
    getRuleById
};
