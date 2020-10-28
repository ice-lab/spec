'use strict';

const rule = require('../../../src/rules/deps-no-router-library');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('deps-no-router-library', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ devDependencies: { 'react-router': '^5.2.0' } })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({
        devDependencies: { 'ice.js': '^1.0.0', 'react-router': '^5.2.0' },
      })}`,
      errors: [
        {
          message: 'It is not recommended to directly rely on routing libraries "react-router"',
        },
      ],
    },
  ],
});
