const semver = require('semver');
const bcd = require('@mdn/browser-compat-data');
const docsUrl = require('../docsUrl');

const targetBrowsers = {
  safari: 9,
  safari_ios: 9,
};

const APIsToLowercase = {
  Console: true,
  Window: true,
  Document: true,
  External: true,
  History: true,
  Location: true,
  Navigator: true,
  Performance: true,
  Screen: true,
  Controllers: true,
};
// https://www.npmjs.com/package/@mdn/browser-compat-data
const data = Object.assign({}, bcd.javascript.builtins, bcd.api);

Object.keys(data).forEach((key) => {
  if (APIsToLowercase[key]) {
    data[key.toLowerCase()] = data[key];
    delete data[key];
  }
});

const RULE_NAME = 'recommend-polyfill';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      recommendPolyfill: 'It is recommended to add polyfill for "{{object}}.{{property}}" in "{{browser}}"',
    },
  },

  create(context) {
    // console.log(data.Array.from.__compat.support.safari);

    const handleReport = function (node, object, property) {
      let target = data[object];

      if (data[object] && data[object][property]) {
        target = data[object][property];
      }

      if (target) {
        try {
          const supports = target.__compat.support;
          for (let i = 0, l = Object.keys(targetBrowsers).length; i < l; i++) {
            const browser = Object.keys(targetBrowsers)[i];
            if (semver.satisfies(`${targetBrowsers[browser] }.0.0`, `<${supports[browser].version_added}`)) {
              context.report({
                node,
                messageId: 'recommendPolyfill',
                data: {
                  object,
                  property,
                  browser: `${browser}@${targetBrowsers[browser]}`,
                },
              });
              break;
            }
          }
        } catch (e) {
          // ignore
        }
      }
    };

    const handleRequires = function (node) {
      let type; let object; let
        property;
      if (node.callee.type === 'MemberExpression') {
        type = node.callee.object.type;
        object = node.callee.object.name;
        property = node.callee.property.name || node.callee.property.value; // object.value or object[value]

        if (type === 'CallExpression') {
          object = node.callee.object.callee && node.callee.object.callee.name;
        }

        // [].findAll()
        if (type === 'ArrayExpression') {
          object = 'Array';
        }

        if (type === 'ObjectExpression') {
          object = 'Object';
        }

        if (object && property) {
          if (object.length > 1) {
            handleReport(node, object, property);
          } else {
            ['Array', 'Object', 'String'].forEach(() => {
              handleReport(node, object, property);
            });
          }
        }
      }
    };

    return {
      CallExpression: handleRequires,
      NewExpression: handleRequires,
    };
  },
};
