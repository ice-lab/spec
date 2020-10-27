const rule = require('../../../src/rules/deps-no-resolutions');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();
ruleTester.run('deps-no-resolutions', rule, {
  valid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ name: 'test' })}`,
    },
    {
      filename: 'package.js',
      code: 'var t = 1',
    },
  ],

  invalid: [
    {
      filename: 'package.json',
      code: `module.exports = ${JSON.stringify({ resolutions: { 'ice.js': '1.0.0' } })}`,
      errors: [
        {
          message: 'It is not recommended to use resolutions to lock the version',
        },
      ],
    },
  ],
});
