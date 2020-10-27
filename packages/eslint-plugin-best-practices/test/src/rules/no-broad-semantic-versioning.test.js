'use strict';

const rule = require('../../../src/rules/no-broad-semantic-versioning');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-broad-semantic-versioning', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ devDependencies: { 'ice.js': '^1.0.0' } })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ devDependencies: { 'ice.js': '*' } })}`,
      errors: [
        {
          message: 'The "ice.js" is not recommended to use "*", and it is recommend using "^1.0.0"',
        },
      ],
    },
  ],
});
