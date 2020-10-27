'use strict';

const rule = require('../../../src/rules/deps-no-ice-scripts');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('deps-no-ice-scripts', rule, {
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
      code: `module.exports = ${JSON.stringify({ devDependencies: { 'ice-scripts': '^1.0.0' } })}`,
      errors: [
        {
          message: 'It is not recommended to use ice-scripts, the new version is ice.js',
        },
      ],
    },
  ],
});
