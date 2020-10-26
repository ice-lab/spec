const repoUrl = 'https://github.com/ice-lab/spec/tree/master/packages/eslint-plugin-best-practices';

module.exports = function docsUrl(ruleName) {
  return `${repoUrl}/docs/rules/${ruleName}.md`;
};
