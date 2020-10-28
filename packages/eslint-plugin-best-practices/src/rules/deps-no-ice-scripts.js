const path = require('path');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'deps-no-ice-scripts';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: 'code',
    messages: {
      depsNoResolutions: 'It is not recommended to use ice-scripts, the new version is ice.js',
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

              if (dependencyName === 'ice-scripts') {
                context.report({
                  loc: property.loc,
                  messageId: 'depsNoResolutions',
                });
              }
            }
          });
        }
      },
    };
  },
};
