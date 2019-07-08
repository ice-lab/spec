const Linter = require('eslint').Linter;
const linter = new Linter();

const eslintRules = linter.getRules();

console.log('eslintRules', eslintRules);
