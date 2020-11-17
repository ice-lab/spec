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

// For extra property check. Like a.flat no matter what is a.
const extraTargetProperties = {
  flat: { parent: 'Array' },
  flatMap: { parent: 'Array' },
  codePointAt: { parent: 'String' },
  matchAll: { parent: 'String' },
  normalize: { parent: 'String' },
  padEnd: { parent: 'String' },
  padStart: { parent: 'String' },
  replaceAll: { parent: 'String' },
  trimEnd: { parent: 'String' },
  trimStart: { parent: 'String' },
  finally: { parent: 'Promise' },
};

const RULE_NAME = 'recommend-polyfill';

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      recommendPolyfill:
        '[Critical] It is recommended to add polyfill for "{{API}}", This might be caused by a compatibility problem in "{{browser}}"',
    },
  },

  create(context) {
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
            if (
              semver.satisfies(
                `${targetBrowsers[browser]}.0.0`,
                `<${supports[browser].version_added}`,
              )
            ) {
              context.report({
                node,
                messageId: 'recommendPolyfill',
                data: {
                  API: `${object}${property ? '.' : ''}${property}`,
                  browser: `${browser}@${targetBrowsers[browser]}`,
                },
              });
              break;
            }
          }
        } catch (e) {
          // ignore
        }
      } else if (extraTargetProperties[property]) {
        context.report({
          node,
          messageId: 'recommendPolyfill',
          data: {
            API: `${extraTargetProperties[property].parent}.${property}`,
            browser: 'iOS9',
          },
        });
      }
    };

    const handleRequires = function (node) {
      try {
        let type;
        let object;
        let property;
        if (node.callee.type === 'Identifier') {
          // new xxx();
          // xxx.xxx();
          object = node.callee.name;
          if (object) {
            handleReport(node, object, '');
          }
        } else if (node.callee.type === 'MemberExpression') {
          type = node.callee.object.type;
          object = node.callee.object.name;
          property = node.callee.property.name || node.callee.property.value; // object.value or object[value]

          if (type === 'CallExpression') {
            object = node.callee.object.callee && node.callee.object.callee.name;
          }

          // xxx.prototype.xxx.call();
          if (type === 'MemberExpression') {
            const obj = node.callee.object;
            if (obj.object && obj.object.property && obj.object.property.name === 'prototype') {
              object = obj.object.object.name;
              property = obj.property.name;
            }
          }

          // [].xxx()
          if (type === 'ArrayExpression') {
            object = 'Array';
          }

          // {}.xxx()
          if (type === 'ObjectExpression') {
            object = 'Object';
          }

          // ''.xxx()
          if (type === 'Literal' && typeof node.callee.object.value === 'string') {
            object = 'String';
          }

          if (object && property) {
            handleReport(node, object, property);
          }
        }
      } catch (e) {
        // ignore
      }
    };

    return {
      CallExpression: handleRequires,
      NewExpression: handleRequires,
    };
  },
};
