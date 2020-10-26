const path = require('path');
const docsUrl = require('../docsUrl');

const RULE_NAME = 'deps-no-router-library';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: null,
    messages: {
      depsNoRouterLibrary: 'It is not recommended to directly rely on routing libraries "{{name}}"',
    },
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const sourceCodeText = sourceCode.getText();
    if (
      path.basename(context.getFilename()) !== 'package.json' ||
      (sourceCodeText.indexOf('ice.js') === -1 && sourceCodeText.indexOf('rax-app') === -1)
    ) {
      return {};
    }

    const routerLibs = ['react-router', 'vue-router', 'rax-use-router'];

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
              const routerLib = routerLibs.find((lib) => dependencyName === lib);

              if (routerLib) {
                context.report({
                  loc: property.loc,
                  messageId: 'depsNoRouterLibrary',
                  data: {
                    name: routerLib,
                  },
                });
              }
            }
          });
        }
      },
    };
  },
};
