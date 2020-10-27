const rule = require('../../../src/rules/recommend-polyfill');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('recommend-polyfill', rule, {
  valid: [
    {
      code: `
      Array.from('xxxx');
    `,
      parserOptions: {
        ecmaVersion: 6,
      },
    },
  ],

  invalid: [
    {
      code: `
      navigator.sendBeacon('xxx');
    `,
      parserOptions: {
        ecmaVersion: 6,
      },
      errors: [
        {
          message: 'It is recommended to add polyfill for "navigator.sendBeacon" in "safari@9"',
        },
      ],
    },
  ],
});
