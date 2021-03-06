const path = require('path');
const semver = require('semver');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'recommend-update-rax';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      depsRecommendUpdateRax: 'Rax version < 1.0 , recommend to update Rax',
    },
  },

  create(context) {
    if (path.basename(context.getFilename()) !== 'package.json') {
      return {};
    }

    return {
      Property: function handleRequires(node) {
        if (
          node.key &&
          node.key.value &&
          (node.key.value === 'dependencies' || node.key.value === 'devDependencies') &&
          node.value &&
          node.value.properties
        ) {
          node.value.properties.forEach((property) => {
            if (property.key && property.key.value) {
              const dependencyName = property.key.value;

              if (dependencyName === 'rax' && semver.satisfies('0.6.7', property.value.value)) {
                context.report({
                  loc: property.loc,
                  messageId: 'depsRecommendUpdateRax',
                });
              }
            }
          });
        }
      },
    };
  },
};
