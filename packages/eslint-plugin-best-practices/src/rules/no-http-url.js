const docsUrl = require('../docsUrl');

const RULE_NAME = 'no-http-url';
const HTTP_PROTOCOL = 'http' + ':';
const HTTPS_PROTOCOL = 'https' + ':';

module.exports = {
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      url: docsUrl(RULE_NAME),
    },
    fixable: 'code',
    messages: {
      noHttpUrl: 'Recommended "{{url}}" switch to HTTPS',
    },
  },
  create(context) {
    return {
      Literal: function handleRequires(node) {
        if (node.value && typeof node.value === 'string' && node.value.indexOf(HTTP_PROTOCOL) === 0) {
          context.report({
            node,
            messageId: 'noHttpUrl',
            data: {
              url: node.value,
            },
            fix: (fixer) => {
              return fixer.replaceText(node, `'${node.value.replace(HTTP_PROTOCOL, HTTPS_PROTOCOL)}'`);
            },
          });
        }
      },
    };
  },
};
