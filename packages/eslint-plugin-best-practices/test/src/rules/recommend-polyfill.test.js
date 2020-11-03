const rule = require('../../../src/rules/recommend-polyfill');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('recommend-polyfill', rule, {

  valid: [
    {
      code: 'Array.from("xxxx");',
    },
  ],

  invalid: [
    {
      code: 'navigator.sendBeacon("xxx");',
      errors: [
        {
          message: 'It is recommended to add polyfill for "navigator.sendBeacon" in "safari@9"',
        },
      ],
    },
    {
      code: '[0, 1, 2, [3, 4]].flat(2)',
      errors: [
        {
          message: 'It is recommended to add polyfill for "Array.flat" in "safari@9"',
        },
      ],
    },
    {
      code: 'Array.prototype.flat.apply([0, 1, 2, [3, 4]], 2)',
      errors: [
        {
          message: 'It is recommended to add polyfill for "Array.flat" in "safari@9"',
        },
      ],
    },
    {
      code: 'new Proxy({}, function() {});',
      errors: [
        {
          message: 'It is recommended to add polyfill for "Proxy." in "safari@9"',
        },
      ],
    },
    {
      code: 'Reflect.apply(Math.floor, undefined, [1.75]);',
      errors: [
        {
          message: 'It is recommended to add polyfill for "Reflect.apply" in "safari@9"',
        },
      ],
    },
    {
      code: `
      var p = new Promise(function() {});
      p.finally(function() {});
      `,
      errors: [
        {
          message: 'It is recommended to add polyfill for "Promise.finally" in "iOS9"',
        },
      ],
    },
  ],
});
