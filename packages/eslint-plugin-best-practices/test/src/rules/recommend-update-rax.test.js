'use strict';

const rule = require('../../../src/rules/recommend-update-rax');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('recommend-update-rax', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ dependencies: { rax: '^1.1.0' } })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ dependencies: { rax: '^0.6.0' } })}`,
      errors: [
        {
          message: 'Rax version < 1.0 , recommend to update Rax',
        },
      ],
    },
  ],
});
